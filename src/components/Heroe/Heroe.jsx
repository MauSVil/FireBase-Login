import React from 'react';
import { themed } from '../../HOC/themed/themed';

const Heroe = ({ classes }) => (
  <div className={classes.root}>
    <h1>Chat made with Sockets.io</h1>
    <h3>By: MauSVil</h3>
  </div>
);

export default themed('components.Heroe', Heroe);
