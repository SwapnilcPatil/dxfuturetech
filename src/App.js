import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import RentPage from './Pages/Rent';
import PropertiesPage from './Pages/Properties';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<RentPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
