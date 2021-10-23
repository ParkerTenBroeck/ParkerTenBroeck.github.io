import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const propTypes = {
  radius: PropTypes.string,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string
}

const defaultProps = {
  radius: '128px',
  borderWidth: '4px',
  borderColor: null
}

const LogoRound = ({
  className,
  radius,
  borderWidth,
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
            src={require('./../../../assets/images/profile.jpg')}
            alt="Open"
            width={radius}
            height={radius}
            style={borderColor ? {'border-color':borderColor} : null, borderWidth ? {'border-width':borderWidth} : null}
            class="logo-round" />
        </Link>
      </h1>
    </div>
  );
}

LogoRound.propTypes = propTypes;
LogoRound.defaultProps = defaultProps;

export default LogoRound;