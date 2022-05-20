import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Assignment from './pages/Assignment';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/assignment' element={<Assignment />} />
    </Routes>
  );
};

export default AppRoutes;
