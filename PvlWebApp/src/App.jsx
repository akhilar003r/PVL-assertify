import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';

function App() {
  const [page, setPage] = useState("Home");

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Router>
      <>
        <div className='navbar'>
          <div className='navbarContainer'>
            <img
              className='logo'
              src='https://cdn1.iconfinder.com/data/icons/unigrid-religion/60/008_011_religion_mandala_buddhism_indian-256.png'
              alt=''
            />
            <div className='text'>
              <p className='toptext'>CAROL SOLVAY</p>
              <p className='bottomtext'>Mindset Mastery Mentor</p>
            </div>
            <div className='rightSideComp'>
              <Link to='/home' onClick={() => handlePageChange('Home')} className={`nav-link ${page === 'Home' ? 'active-link' : ''}`}>Home</Link>
              <Link to='/about' onClick={() => handlePageChange('About')} className={`nav-link ${page === 'About' ? 'active-link' : ''}`}>About</Link>
              <Link to='/contact' onClick={() => handlePageChange('Contact')} className={`nav-link ${page === 'Contact' ? 'active-link' : ''}`}>Contact</Link>
            </div>
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
