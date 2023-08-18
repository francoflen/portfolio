import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
