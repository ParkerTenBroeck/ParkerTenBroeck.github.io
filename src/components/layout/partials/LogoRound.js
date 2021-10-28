import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const propTypes = {
  radius: PropTypes.number,
  borderColor: PropTypes.string
}

const defaultProps = {
  radius: 128,
  borderColor: null
}

const LogoRound = ({
  className,
  radius,
  borderColor,
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
        <Link to="/">
          <Image
            src={require('./../../../assets/images/profile.jpg').default}
            alt="Open"
            width={radius}
            height={radius}
            className="logo-round"/>
        </Link>
      </h1>
    </div>
  );
}

LogoRound.propTypes = propTypes;
LogoRound.defaultProps = defaultProps;

export default LogoRound;