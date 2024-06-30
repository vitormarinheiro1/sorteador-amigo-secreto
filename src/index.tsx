import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cabecalho from './componentes/Cabecalho/Cabecalho';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cabecalho />
    <App />
  </React.StrictMode>
);
