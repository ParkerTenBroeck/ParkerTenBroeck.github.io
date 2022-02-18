import React from 'react';
import classNames from 'classnames';
import {scrollTo} from '../../../layouts/LayoutDefault'

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a  data-scroll href="/#about" onClick={() => {scrollTo('#about');}} >About</a>
        </li>
        <li>
          <a data-scroll href="/#skills" onClick={() => {scrollTo('#skills');}}>Skills</a>
        </li>
        <li>
          <a data-scroll href="/#projects" onClick={() => {scrollTo('#projects');}}>Projects</a>
        </li>
        <li>
          <a data-scroll href="/#contact" onClick={() => {scrollTo('#contact');}}>Contact</a>
        </li>
        <li>
          <a href="/resume/">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;