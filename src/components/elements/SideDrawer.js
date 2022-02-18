import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../elements/Button';
import { Scrollbars } from 'react-custom-scrollbars';

const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  show: PropTypes.bool.isRequired,
  includeTop: PropTypes.bool,
  includeBottom: PropTypes.bool
}

const defaultProps = {
  children: null,
  title: undefined,
  show: true,
  includeTop: true,
  includeBottom: true
}

const useDisableBodyScroll = (open) => {
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }, [open]);
  };

const SideDrawer = ({
  className,
  children,
  handleClose,
  title,
  show,
  includeTop,
  includeBottom,
  ...props
}) => {

  const classes = classNames(
    'side-drawer',
    show && 'is-active',
    !show && 'is-closed',
    className
  );

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  useDisableBodyScroll(show);

  return (
      <>
    <div className={classes}  onClick={handleClose}>
        <div className="side-drawer-inner" onClick={stopProgagation}>
            { includeTop &&
            <div className="side-drawer-top">
                <span className="side-drawer-title  text-color-high text-xs">{title}</span>
                <span className="side-drawer-close" onClick={handleClose}>
                    <svg 
                        viewBox="64 64 896 896" 
                        focusable="false" 
                        data-icon="close" 
                        width="1em" 
                        height="1em" 
                        fill="currentColor" 
                        aria-hidden="true">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                            </path>
                    </svg>
                </span>
            </div>
            }
            <Scrollbars >
                <div className="side-drawer-content"> 
                    {children}
                </div> 
            </Scrollbars>
            { includeBottom &&
            <div className="side-drawer-bottom">
                <Button onClick={handleClose} className="text-xs" size="sm" color="primary">Close</Button>
            </div>
            }
        </div>
    </div>
    </>
  );
}

SideDrawer.propTypes = propTypes;
SideDrawer.defaultProps = defaultProps;

export default SideDrawer;