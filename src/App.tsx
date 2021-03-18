import React from 'react';
import './App.css';
import Employees from "./components/Employees";

function App() {
  return (
      <div className="container-lg mt-4 shadow-lg p-3 mb-5 rounded w-90 bg-white content-wrapper">
        <h1 className="text-center title">Radency employees</h1>
        <Employees/>
      </div>
  );
}

export default App;
