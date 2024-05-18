import React from 'react';
import ShowData from './components/ShowData';
import UpdateRemark from './components/UpdateRemark';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CodeRower Software Pvt Ltd.</h1>
      <div className="container">
        <ShowData />
      </div>
      <div className="container">
        <UpdateRemark />
      </div>
    </div>
  );
}

export default App;
