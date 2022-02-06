import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Countries from './Components/Pages/Countries/Countries';
import Statistics from './Components/Pages/Statistics/Statistics';
import Global from './Components/Pages/Global/Global';
import GlobalListGaz from './Components/Utils/GlobalListGaz';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/Countries" element={<Countries />} />
        <Route path="/Global/:countryId" element={<Global />} />
        <Route path='/GloablListGaz/:monthId' element={<GlobalListGaz />} />
        <Route path="/Statistics" element={<Statistics />} />
      </Route>
    </Routes>
  </BrowserRouter >,
  document.getElementById('root')
);