// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home'; 
import HomeSpreadsheets from './pages/HomeSpreadsheets';
import DecorationWorksheets from './pages/DecorationWorksheets';
import NewSheet from './pages/NewSheet';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/decoration-worksheets" element={<DecorationWorksheets />} />
        <Route path="/homespreadsheets" element={<HomeSpreadsheets />} />
        <Route path="/newsheet" element={<NewSheet/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
