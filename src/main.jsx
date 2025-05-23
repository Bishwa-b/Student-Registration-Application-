import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { DataProvider } from './contexts/DataContext.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
