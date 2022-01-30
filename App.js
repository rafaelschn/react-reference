import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import './estilo.css';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
