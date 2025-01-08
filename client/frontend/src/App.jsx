import { useState } from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';
import About from './pre-register-pages/About'
import Groups from './post-register-pages/Groups'
import Settings from './post-register-pages/Settings';
import Notifications from './post-register-pages/Notifications';
import { ThemeProvider } from '@emotion/react';
import { CustomTheme } from './Themes';
import PathSelection from './post-register-pages/PathSelection';

function App() {
  return (
  <ThemeProvider theme={CustomTheme}>
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/home" element={<PathSelection />} />
        <Route path="/group" element={<Groups />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  </ThemeProvider>


  )
}

export default App
