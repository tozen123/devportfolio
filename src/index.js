import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './Home.css';
import './About.css';
import './Header.css';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </React.StrictMode>
);


