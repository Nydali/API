import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Category from './Category';
import Search from './Search';
import backgroundImage from './assets/movie-background.jpg'; 

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          color: 'white', 
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <nav
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)', 
            padding: '10px',
            width: '100%',
            textAlign: 'center',
            position: 'fixed',
            top: 0,
            zIndex: 1000,
          }}
        >
          <ul
            style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              display: 'inline-flex',
              justifyContent: 'center',
            }}
          >
            <li style={{ margin: '0 15px' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>Search</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/category" style={{ color: 'white', textDecoration: 'none' }}>Movie Categories</Link>
            </li>
            <li style={{ margin: '0 15px' }}>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Me</Link>
            </li>
          </ul>
        </nav>

        <div style={{ marginTop: '60px', width: '100%', textAlign: 'center', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category" element={<Category />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
