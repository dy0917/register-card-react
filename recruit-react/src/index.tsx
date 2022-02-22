import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App';
import Card from './Components/Card';
import library from './Components/fontawesome';


ReactDOM.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

