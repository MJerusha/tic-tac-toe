import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeComponent from './components/home/Home'

const App = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Card Shuffling Game</h1>
      <HomeComponent />
    </div>
  );
};

export default App;