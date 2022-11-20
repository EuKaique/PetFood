import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import PetShop from './pages/petshop';
import Sidebar from './components/sidebar';
import './style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <PetShop />
  </React.StrictMode>
);
