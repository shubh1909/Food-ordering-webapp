
import './App.css';
import React from'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import DetailPage from './components/Detail/DetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail" element={<DetailPage/>} />
      </Routes>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
