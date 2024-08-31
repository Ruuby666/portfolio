// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Obtén el contenedor principal (root)
const container = document.getElementById('root');

// Crea el root con createRoot
const root = ReactDOM.createRoot(container);

// Renderiza tu aplicación
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);