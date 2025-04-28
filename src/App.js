import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import Contact from './Components/Contact';  // Import Contact here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar navbar="Navbar" home="Home" link="Link"  />
        <Card />
        <Routes>
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
