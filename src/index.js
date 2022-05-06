import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesPage from './Controller/RoutesPage';

import './index.css';

import './View/Login.css'
import './View/Components/HomePage.css';
import './View/Components/Posts/Posts.css';
import './View/Components/Users/Users.css';
import './View/Components/Footer/Footer.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesPage/>
  </React.StrictMode>
);
