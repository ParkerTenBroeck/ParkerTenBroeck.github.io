import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';
import { Link } from "react-router-dom";

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/#0">
          <Image
            src={require('./../../../assets/images/profile.jpg').default}
            alt="Open"
            width={32}
            height={32} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;