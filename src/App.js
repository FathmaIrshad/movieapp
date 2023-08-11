// import logo from './logo.svg';
import React from 'react';
import Navbar from './Navbar';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Api from './Api';
import Tvshow from './Tvshow';
import './Navbar.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Api/>}/>
        <Route path="/Tvshow" element={<Tvshow/>}/> 
      </Routes>
    </Router>
   
  );
};

export default App;
