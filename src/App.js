import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Movies from './components/Movies'
import './App.css';

function App() {
  return (
    <Router>   
      <Movies  />
   </Router>
  );
}

export default App;
