import { jsx, css } from 'theme-ui';
import React from 'react';
import LOGO from './logo.png'; 


const MainHeader = ({text}) => (
  <>
    <img src={LOGO} height="100%"/> 
    <Styled.h1>
      {text}
    </Styled.h1>
  </>
);

export default MainHeader;
