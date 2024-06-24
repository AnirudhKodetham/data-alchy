import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import ConvertForm from './components/ConvertForm';
import SuccessPage from './components/SuccessPage';

const App = () => (

  <Router>
    <Routes>
      <Route path="/" element={<ConvertForm />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </Router>

);

export default App;
