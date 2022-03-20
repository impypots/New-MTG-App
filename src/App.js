import React, { useState } from 'react';
import Menu from './Menu';
import Board from './Board';
import ajani from './ajani-bg.png';

function App() {
  return (
    <>
    <img src={ajani} id="ajani" alt=""></img>
    <Menu />
    <Board />
    </>
  );
}

export default App;
