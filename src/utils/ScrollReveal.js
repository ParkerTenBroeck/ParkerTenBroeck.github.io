import React, { useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

const ScrollReveal = React.forwardRef((props, ref) => {

  const [viewportHeight, setViewportheight] = useState(window.innerHeight); 
  const [revealEl, setRevealel] = useState([]);

  const checkComplete = () => {
    return false;//revealEl.length <= document.querySelectorAll('[class*=reveal-].is-revealed').length;
  };

  const elementIsVisible = (el, offset) => {
    //return true;//brus
    return (el.getBoundingClientRect().top <= viewportHeight - offset);
  };

  const revealElements = () => {
    if (checkComplete()) return;
    for (let i = 0; i < revealEl.length; i++) {
      let el = revealEl[i];
      let revealDelay = el.getAttribute('data-reveal-delay');
      let revealOffset = (el.getAttribute('data-reveal-offset') ? el.getAttribute('data-reveal-offset') : '50');
      let listenedEl = (el.getAttribute('data-reveal-container') ? el.closest(el.getAttribute('data-reveal-container')) : el);
      if (elementIsVisible(listenedEl, revealOffset)) {
        if (revealDelay && revealDelay !== 0 && !el.classList.contains('has-revealed')) {
          setTimeout(function () {
            el.classList.add('is-revealed');
            el.classList.add('has-revealed');
          }, revealDelay);
        } else {
          el.classList.add('is-revealed');
          el.classList.add('has-revealed');
        }
      }else {
        el.classList.remove('is-revealed');
      }
    }
  };

  useImperativeHandle(ref, () => ({
    init() {
      setRevealel(document.querySelectorAll('[class*=reveal-]'));
    }
  }));  

  useEffect(() => {
    if (typeof revealEl !== 'undefined' && revealEl.length > 0) {
      if (!checkComplete()) {
        //var test = document.getElementById("Main-ScrollBar");
        //test.addEventListener('scroll', handleScroll);
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
      }
      revealElements();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealEl]);

  const handleListeners = () => {
    if (!checkComplete()) return;
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };

  const handleScroll = throttle(() => {
    handleListeners();
    revealElements();
  }, 30);

  const handleResize = throttle(() => {
    setViewportheight(window.innerHeight);
    revealElements();
  }, 30);

  useEffect(() => {
    handleListeners();
    revealElements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewportHeight]);  

  return (
    <>
      {props.children()}
    </>
  );
});

ScrollReveal.propTypes = {
  children: PropTypes.func.isRequired
};

export default ScrollReveal;