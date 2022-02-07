import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Links } from './pages/links';
import { Error } from './pages/error';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<Error />} />{' '}
        {/* "*" o react entende como notfound */}
      </Routes>
    </Router>
  );
}
