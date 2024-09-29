
import React from 'react';
import './App.css';
import {filters, projects} from './components/data/data.js';
import Portfolio from './components/portfolio/portfolio.jsx';

function App() {

  return (
    <>
    <Portfolio filters={filters} projects={projects} />
    </>
  )
}

export default App
