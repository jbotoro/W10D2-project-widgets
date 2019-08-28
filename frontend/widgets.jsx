import React from 'react';
import ReactDOM from 'react-dom';
//import Clock from './clock';
import Root from './root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  // root.append("I Work");
  ReactDOM.render( <Root /> , root );
  
});

