import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {

  const [display, setDisplay] = useState(true);
  
  return (
    <div className="app-comp-parent" style={{height:`${!display ? 500 : 400}px`}}>
      <div className="btn-parent">
        <button className={`main-signup-btn ${!display ? 'active' : 'not-active'}`} onClick={() => setDisplay(false)}>ثبت نام</button>
        <button className={`main-login-btn ${display ? 'active' : 'not-active'}`} onClick={() => setDisplay(true)}>ورود</button>
      </div>
      <div className="comp-parent" style={{height:`${!display ? 390 : 282}px`}}>
        {!display ? (<Signup/>) : (<Login/>)}
      </div>
    </div>
  );
}

export default App;
