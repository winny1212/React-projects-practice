import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Pokeman from './components/Pokeman';
import PokemanList from './components/PokemanList';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/'>Search </Link>
      </nav>
      <Routes>
        <Route path='/' element={PokemanList} />
        <Route path='/pokeman/:pokeman' exact element={Pokeman} />
      </Routes>
    </div>
  );
}

export default App;
