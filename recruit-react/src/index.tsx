import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Card from './Pages/Card';
import Menu from './Pages/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {store} from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Card name="Kingsley" />}>
          </Route>
          <Route path="/menu" element={<Menu />}>

          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

