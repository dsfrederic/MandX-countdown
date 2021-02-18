import { jsx, css } from 'theme-ui';
import React from 'react';
import LOGO from './logo.png'; 


const MainHeader = ({text}) => (
  <div style={{height: "100%"}}>
  <h1>{text}</h1>
  <img src={LOGO} height="100%"/> 
  </div>
);

export default Credits;