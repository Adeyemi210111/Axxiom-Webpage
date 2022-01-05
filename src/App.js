import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Buy from './pages/buy';
import Rent from './pages/rent';
import Shortlets from './pages/shortlets';

function App() {
  return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/buy' element={<Buy/>} />
            <Route path='/rent' element={<Rent/>} />
            <Route path='/shortlets' element={<Shortlets/>} />
          </Routes>
        </Router>
  );
}

export default App;
