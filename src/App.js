import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Schedule from './components/Schedule';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Schedule />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default App;
