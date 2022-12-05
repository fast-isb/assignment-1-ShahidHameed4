import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Admin from './Admin/App';
import Resident from './Resident/App';
import Guest from './Guest/App'
import Head from './Head';
import {Routes,Route, BrowserRouter, HashRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/resident/*' element={<Resident />} />
        <Route path='/Guest/*' element={<Guest />} />
        <Route path='/' element={<Head />} />
        <Route path='*' element={<h1>Error</h1>} />

        
      </Routes>
    </HashRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
