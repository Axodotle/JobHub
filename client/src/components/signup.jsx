import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let navigate = useNavigate();

  function createAccount() {
    const newUsername = document.getElementById('username');
    const newPassword = document.getElementById('password');
    const newFirstname = document.getElementById('firstname');
    const newLastname = document.getElementById('lastname');

    // console.log(newUsername.value);
    // console.log(newPassword.value);
    // console.log(newFirstname.value);
    // console.log(newLastname.value);

    // fetch('http://localhost/users/signup', {
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },

    // updated route and fixed broken headers
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers

    // ESLINT/PRETTIER????

    fetch('/users/signup', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: newUsername.value,
        password: newPassword.value,
        firstName: newFirstname.value,
        lastName: newLastname.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('this is fetch response', data);
        navigate('/');
      })
      .catch(function (res) {
        alert('bad');
      });
  }

  return (
    <div className='signup-box'>
      <input type='text' id='username' name='username' placeholder='Username' />
      <input type='text' id='password' name='password' placeholder='Password' />
      <input
        type='text'
        id='firstname'
        name='firstname'
        placeholder='Firstname'
      />
      <input type='text' id='lastname' name='lastname' placeholder='Lastname' />
      <button type='button' onClick={createAccount}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
