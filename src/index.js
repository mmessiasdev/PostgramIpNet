import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import './View/Components/HomePage.css';
import HomePage from './View/Components/HomePage';
import './View/Components/Posts/Posts.css';
import './View/Components/Users/Users.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
