import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pre-register-pages/About';
import Groups from './post-register-pages/Groups';
import Settings from './post-register-pages/Settings';
import Notifications from './post-register-pages/Notifications';
import { ThemeProvider } from '@emotion/react';
import { CustomTheme } from './Themes';
import PathSelection from './post-register-pages/PathSelection';
import SurveyBox from './components/SurveyBox'; // Import SurveyBox component
import EventInfo from './components/EventInfo'; // Import EventInfo component

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
          <Route path="/survey" element={<SurveyBox />} /> {/* Add SurveyBox route */}
          <Route path="/event-info" element={<EventInfo />} /> {/* Add EventInfo route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;