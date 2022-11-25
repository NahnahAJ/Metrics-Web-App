import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Metrics from './components/Metrics';
import Details from './components/Details';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Metrics />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </>
);

export default App;
