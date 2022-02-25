import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BurgerNav from './Components/Nav/BurgerNav';
import Card from './Pages/Card';
import Menu from './Pages/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {store} from './store'
import { Provider } from 'react-redux'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Card />} >
      
          </Route>
          <Route path="/menu" element={<Menu />}>

          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

