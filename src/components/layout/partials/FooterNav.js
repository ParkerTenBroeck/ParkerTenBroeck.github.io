import React from 'react';
import classNames from 'classnames';
import {scrollTo} from '../../../layouts/LayoutDefault'
import { Link } from "react-router-dom";

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
          <Link  data-scroll to="about" onClick={() => {return scrollTo('#about');}} >About</Link>
        </li>
        <li>
          <Link data-scroll to="skills" onClick={() => {return  scrollTo('#skills');}}>Skills</Link>
        </li>
        <li>
          <Link data-scroll to="projects" onClick={() => {return  scrollTo('#projects');}}>Projects</Link>
        </li>
        <li>
          <Link data-scroll to="contact" onClick={() => {return scrollTo('#contact');}}>Contact</Link>
        </li>
        <li>
          <Link to="/resume/">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;