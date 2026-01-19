(() => {
    let lightboxHistoryActive = false;

    const lightbox = document.getElementById("lightbox");
    const stage = lightbox?.querySelector(".lightbox__stage");
    const img = document.getElementById("lightbox-img");
    if (!lightbox || !stage || !img) return;

    let open = false;

    // Transform state (relative to centered position)
    let scale = 1;
    let tx = 0;
    let ty = 0;

    // Base rendered size of the image at scale=1 (in px)
    let baseW = 0;
    let baseH = 0;

    // Dragging
    let lastX = 0;
    let lastY = 0;

    // Touch pinch
    let touchMode = null;
    let pinchStartDist = 0;
    let pinchStartScale = 1;
    let pinchMid = { x: 0, y: 0 };

    const MIN_SCALE = 1;
    const MAX_SCALE = 6;

    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    const rect = (el) => el.getBoundingClientRect();

    function measureBaseSize() {
        // IMPORTANT: measure when tx/ty=0 and scale=1 so we get the centered base size.
        const prev = img.style.transform;
        img.style.transform = "translate(0px, 0px) scale(1)";
        const r = rect(img);
        baseW = r.width;
        baseH = r.height;
        img.style.transform = prev;
    }

    function clampPan() {
        const s = rect(stage);

        const scaledW = baseW * scale;
        const scaledH = baseH * scale;

        // When the image is smaller than the stage, keep it centered (no panning).
        const maxX = Math.max(0, (scaledW - s.width) / 2);
        const maxY = Math.max(0, (scaledH - s.height) / 2);

        tx = clamp(tx, -maxX, maxX);
        ty = clamp(ty, -maxY, maxY);
    }

    function applyTransform() {
        clampPan();
        img.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
        img.classList.toggle("is-zoomed", scale > 1);
        img.classList.toggle("is-unzoomed", scale === 1);
    }

    function resetView() {
        scale = 1;
        tx = 0;
        ty = 0;
        applyTransform();
    }

    function openLightbox(src, alt) {
        img.onload = null;
        img.src = src;
        img.alt = alt || "";

        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.classList.add("lb-open");
        open = true;

        if (!lightboxHistoryActive) {
            history.pushState({ lightbox: true }, "");
            lightboxHistoryActive = true;
        }

        // Block background scroll/gestures while open (especially iOS)
        document.addEventListener("touchmove", preventTouchScroll, { passive: false });

        img.onload = () => {
            // Wait for layout to settle, then measure and reset.
            requestAnimationFrame(() => {
                measureBaseSize();
                resetView();
            });
        };

        // If cached and instantly available
        if (img.complete) {
            requestAnimationFrame(() => {
                measureBaseSize();
                resetView();
            });
        }
    }

    function closeLightbox(fromPopState = false) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("lb-open");
        open = false;

        img.classList.remove("dragging");
        touchMode = null;

        document.removeEventListener("touchmove", preventTouchScroll, { passive: false });

        if (lightboxHistoryActive && !fromPopState) {
            history.back();
        }

        lightboxHistoryActive = false;
    }

    function preventTouchScroll(e) {
        if (open) e.preventDefault();
    }

    function zoomAt(clientX, clientY, newScale) {
        const s = rect(stage);

        const cx = clientX - s.left - s.width / 2;
        const cy = clientY - s.top - s.height / 2;

        const prevScale = scale;
        scale = clamp(newScale, MIN_SCALE, MAX_SCALE);

        // Keep point under cursor stable (relative to center-based coordinates)
        tx = cx - ((cx - tx) / prevScale) * scale;
        ty = cy - ((cy - ty) / prevScale) * scale;

        applyTransform();
    }

    // Open on thumbnail click; close on backdrop click
    document.addEventListener("click", (e) => {
        const thumb = e.target.closest("img.zoomable");
        if (thumb) {
            openLightbox(thumb.dataset.full || thumb.src, thumb.alt);
            return;
        }
        if (open && (e.target === lightbox || e.target === stage)) closeLightbox();
    });

    // Prevent clicking the image from closing
    img.addEventListener("click", (e) => {
        if (open) e.stopPropagation();
    });

    // ESC to close
    document.addEventListener("keydown", (e) => {
        if (open && e.key === "Escape") closeLightbox();
    });

    // Wheel / trackpad zoom
    stage.addEventListener("wheel", (e) => {
        if (!open) return;
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
        zoomAt(e.clientX, e.clientY, scale * factor);
    }, { passive: false });

    // --- CLICK vs DRAG (Pointer Events) ---
    let pointerId = null;
    let downX = 0, downY = 0;
    let startTx = 0, startTy = 0;

    let moved = false;
    const DRAG_THRESHOLD = 6; // px
    const ZOOM_IN = 2.5;

    function setZoomedClass() {
        img.classList.toggle("is-zoomed", scale > 1);
    }

    img.addEventListener("pointerdown", (e) => {
        if (!open) return;

        pointerId = e.pointerId;
        img.setPointerCapture(pointerId);

        downX = e.clientX;
        downY = e.clientY;
        startTx = tx;
        startTy = ty;
        moved = false;

        // Don’t let the browser start image dragging/scrolling
        e.preventDefault();
    });

    img.addEventListener("pointermove", (e) => {
        if (!open || pointerId !== e.pointerId) return;

        const dx = e.clientX - downX;
        const dy = e.clientY - downY;

        // Decide if this gesture is a pan
        if (!moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
            moved = true;
            img.classList.add("dragging");
        }

        // If panning, update translate (pan) from the start position
        if (moved && scale > 1) {
            tx = startTx + dx;
            ty = startTy + dy;
            applyTransform();
        }
    });

    img.addEventListener("pointerup", (e) => {
        if (!open || pointerId !== e.pointerId) return;

        img.classList.remove("dragging");
        img.releasePointerCapture(pointerId);
        pointerId = null;

        // If we didn't move enough, treat as a click: toggle zoom
        if (!moved) {
            // Zoom around where they clicked
            const target = (scale === 1) ? ZOOM_IN : 1;
            zoomAt(e.clientX, e.clientY, target);
            setZoomedClass();
        }

        moved = false;
    });

    img.addEventListener("pointercancel", () => {
        img.classList.remove("dragging");
        pointerId = null;
        moved = false;
    });

    // Touch: pan + pinch
    stage.addEventListener("touchstart", (e) => {
        if (!open) return;

        if (e.touches.length === 1) {
            touchMode = "pan";
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        } else if (e.touches.length === 2) {
            touchMode = "pinch";
            const [a, b] = e.touches;
            pinchStartDist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
            pinchStartScale = scale;
            pinchMid = { x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 };
        }
    }, { passive: false });

    stage.addEventListener("touchmove", (e) => {
        if (!open) return;
        e.preventDefault();

        if (touchMode === "pan" && e.touches.length === 1) {
            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;
            tx += x - lastX;
            ty += y - lastY;
            lastX = x;
            lastY = y;
            applyTransform();
        }

        if (touchMode === "pinch" && e.touches.length === 2) {
            const [a, b] = e.touches;
            const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
            const ratio = dist / pinchStartDist;
            zoomAt(pinchMid.x, pinchMid.y, pinchStartScale * ratio);
        }
    }, { passive: false });

    stage.addEventListener("touchend", (e) => {
        if (!open) return;
        if (e.touches.length === 0) touchMode = null;
        if (e.touches.length === 1) {
            touchMode = "pan";
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        }
    });

    window.addEventListener("popstate", (e) => {
        // If the lightbox is open, Back should close it — not leave the page
        if (open) {
            closeLightbox(true);
        }
    });
})();