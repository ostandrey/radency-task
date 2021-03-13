import React from 'react';
import './App.css';
import Employees from "./components/Employees";

function App() {
  return (
      <div className="container-lg mt-4">
        <h1 className="text-center">Radency employees</h1>
        <div className="row">
          <div className="col-4">
            <label htmlFor="formFile" className="form-label">Upload the .csv file</label>
            <input className="form-control mt-2 mb-2" type="file" id="formFile"/>
          </div>
        </div>
        <Employees/>
      </div>
  );
}

export default App;
