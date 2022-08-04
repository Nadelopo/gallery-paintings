import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Filter from './components/Filters/Filter';
import './styles/App.sass';

function App() {
  return (
    <div>
      <Navbar />
      <Filter />
    </div>
  );
}

export default App;
