import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App';
import Card from './Pages/Card';
import Menu from './Pages/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
          <Route path="/" element={<Card name="Kingsley"/>}>
          </Route>
          <Route path="/menu" element={<Menu/>}>
           
          </Route>
        </Routes>
    </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);

