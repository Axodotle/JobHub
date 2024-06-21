import React from 'react';
import { Route, Routes } from 'react-router-dom'; //add browser router??
import { useState } from 'react';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Dashboard from './components/dashboard.jsx';

export default function App() {
  //Create a state variable to track the username that is signed in.
  //This could (and maybe should?) be done via Redux, but we elected for the simpler approach.
  const [userState, changeUserState] = useState('');

  return (
  
    <div>
      {/* <h1 className='header' role='appName'>Purrrfect Hire</h1> */}
      <div id='logo-container'>
      <img src = 'https://i.imgur.com/eWDDBUa.png' className = 'logo-text'/>
      </div>

      <Routes>
        <Route path='/' element={<Login stateFunc={changeUserState} />} />
        <Route path='/users/signup' element={<Signup />} />
        <Route
          path='/users/dashboard'
          element={<Dashboard userState={userState} />}
        />
      </Routes>
    </div>
  );
}
