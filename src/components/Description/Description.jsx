import React from 'react';
import { themed } from '../../HOC/themed/themed';

const Description = ({ classes }) => (
  <div className={classes.root}>
    <h3>Description</h3>
    <p>
      A chat created with Sockets.io and redux, the Login and Logout was handle with Firebase
    </p>
    <p>
      The style were handle with js in different files using
      withStyles from react jss using a HOC made by me exporting the different styles
      and getting only the styles I need using a path comming from a parameter. 
    </p>
    <h4>Work in progres..</h4>
  </div>
);

export default themed('components.Description', Description);
