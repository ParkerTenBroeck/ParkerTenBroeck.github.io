import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
          <Link data-scroll to="/#about">About</Link>
        </li>
        <li>
          <Link data-scroll to="/#skills">Skills</Link>
        </li>
        <li>
          <Link data-scroll to="/#projects">Projects</Link>
        </li>
        <li>
          <Link data-scroll to="/#contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume/">Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;