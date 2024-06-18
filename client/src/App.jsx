import React from 'react';
import { Route, Routes } from 'react-router-dom'; //add browser router??
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import Dashboard from './components/dashboard.jsx';

export default function App() {
  return (
    <div>
      <h1 className='header'>JobHub</h1>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users/signup' element={<Signup />} />
        <Route path='/users/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}
