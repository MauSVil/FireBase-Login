import React from 'react';
import PropTypes from 'prop-types';
import { themed } from '../../HOC/themed/themed';
import Heroe from '../../components/Heroe';
import Description from '../../components/Description';

const Home = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Heroe />
      <Description />
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

Home.defaultProps = {
  classes: null,
};

export default themed('pages.Home', Home);
