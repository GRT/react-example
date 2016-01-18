
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/hello';
import Pong from 'react-pong';

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
ReactDOM.render(
  <Pong/>,
  document.getElementById('pong')
);