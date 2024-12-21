import { useState } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import About from './pre-register-pages/About'
import Home from './post-register-pages/Home'
import Settings from './post-register-pages/Settings';
import Notifications from './post-register-pages/Notifications';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  </Router>

  )
}

export default App
