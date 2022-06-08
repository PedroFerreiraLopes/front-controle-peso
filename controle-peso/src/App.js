import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import CustomRoutes from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
