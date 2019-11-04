import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { themed } from '../../HOC/themed/themed';

const Header = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <img src="" alt="Logo" />
      <div className={classes.links}>
        <Link to="/" className={classes.link}>Home</Link>
        <Link to="/login" className={classes.link}>Chat</Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string)
};

Header.defaultProps = {
  classes: null,
};

export default themed('components.Header', Header);
