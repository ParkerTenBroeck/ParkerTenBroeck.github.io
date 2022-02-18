import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {scrollTo} from '../../layouts/LayoutDefault'

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: true,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }



  const closeMenu = () => {
  
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      
      <div className="container-xl">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <div className="site-header-inner" >
              <a style={{"whiteSpace":"nowrap"}} className="text-xs" href="/#0" onClick={() => {closeMenu(); scrollTo('#about');}}>Parker TenBroeck</a>
          </div>
          <div className="header-spacer"/>
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      
                      <a data-scroll href="/#about"  style={{'display':'flex', 'justifyContent':'flexStart', 'alignItems':'center'}} onClick={() => {closeMenu(); scrollTo('#about');}}>
                        <span>
                          <svg className="mr-8"
                               style={{'minWidth':'16px'}}
                               viewBox="64 64 896 896" 
                               focusable="false" 
                               data-icon="user"
                               width="1em" 
                               height="1em" 
                               fill="currentColor" 
                               aria-hidden="true">
                              <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z">
                              </path>
                            </svg>
                        </span>
                        <span>About</span>
                      </a>
                    </li>
                    <li>
                      <a data-scroll href="/#skills" style={{'display':'flex', 'justifyContent':'flex-start', 'alignItems':'center'}} onClick={() => {closeMenu(); scrollTo('#skills');}}>
                        <span>
                          <svg className="mr-8"
                               style={{'minWidth':'16px'}}
                               viewBox="64 64 896 896" 
                               focusable="false" 
                               data-icon="code" 
                               width="1em" 
                               height="1em" 
                               fill="currentColor"
                               aria-hidden="true">
                            <path d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z">
                            </path>
                          </svg>
                        </span>
                        <span>Skills</span>
                      </a>
                    </li>
                    <li>
                      <a data-scroll href="/#projects" style={{'display':'flex', 'justifyContent':'flex-start', 'alignItems':'center'}} onClick={() => {closeMenu(); scrollTo('#projects');}}>
                        <span>
                          <svg className="mr-8"
                                style={{'minWidth':'16px'}}
                                stroke="currentColor" 
                                fill="currentColor" 
                                strokeWidth="0" 
                                viewBox="0 0 24 24" 
                                width="1em" 
                                height="1em" 
                                aria-hidden="true" 
                                focusable="false" 
                                xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.706,5.291l-2.999-2.998C18.52,2.105,18.266,2,18,2H6C5.734,2,5.48,2.105,5.293,2.293L2.294,5.291 C2.112,5.472,2,5.722,2,5.999V19c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5.999C22,5.722,21.888,5.472,21.706,5.291z M6.414,4 h11.172l0.999,0.999H5.415L6.414,4z M4,19V6.999h16L20.002,19H4z">
                            </path>
                            <path d="M15 12L9 12 9 10 7 10 7 14 17 14 17 10 15 10z">
                            </path>
                          </svg>
                        </span>
                        <span>Projects</span>
                      </a>
                    </li>
                    <li>
                      <a style={{'display':'flex', 'justifyContent':'flex-start', 'alignItems':'center'}} data-scroll href="/#contact" onClick={() => {closeMenu(); scrollTo('#contact');}}>
                        <span>
                          <svg className="mr-8"
                              style={{'minWidth':'16px'}}
                              stroke="currentColor" 
                              fill="currentColor" 
                              strokeWidth="0" 
                              viewBox="0 0 24 24" 
                              width="1em" 
                              height="1em" 
                              aria-hidden="true" 
                              focusable="false" 
                              xmlns="http://www.w3.org/2000/svg">
                            <path d="M20,2H4C2.897,2,2,2.897,2,4v12c0,1.103,0.897,2,2,2h3v3.767L13.277,18H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16h-7.277L9,18.233V16H4V4h16V16z">
                            </path>
                            <path d="M8 9H16V11H8z"></path>
                          </svg>
                        </span>
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul className="list-reset header-nav-right">
                      <li>
                        <a href="#0" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Sign up</a>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
