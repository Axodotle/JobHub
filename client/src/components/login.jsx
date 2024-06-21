import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import './styles.css';

const Login = ({ stateFunc }) => {
  //Test to see if state is changing on button click as expected
  // useEffect(() => {
  //   //Maybe pass the username to the backend inside the useEffect hook.
  //   console.log('userState2', userState);
  // });
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('users/signup');
  };

  async function loginAccount(event) {
    event.preventDefault();

    const newUsername = document.getElementById('usernameInput');
    const newPassword = document.getElementById('passwordInput');
    // console.log(newUsername.value);
    // console.log(newPassword.value);

    try {
      console.log('before fetch');
      const response = await fetch('/users/login', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        //I think we should change the method?
        method: 'POST',
        body: JSON.stringify({
          username: newUsername.value,
          password: newPassword.value,
        }),
      });
      console.log('response ', response);
      const data = await response.json();
      if (data) {
        // alert('Welcome Back!');
        //Uncomment when backend connection is set up
        stateFunc(newUsername.value);
        navigate('/users/dashboard');
      }
      // alert(data);
    } catch (err) {
      alert('Incorrect username or password');
    }
    // .then((data) => data.json())
    // .then((data) => {
    //   console.log('this is fetch response', data);
    // })
    // .catch(function (res) {
    //   alert('bad');
    // });
  }

  return (
    <div className='login-container'>
      <div>
        <h2>Login</h2>
        <form /*onSubmit={handleSubmit}*/ id='loginform'>
          username:{' '}
          <input
            type='text'
            id='usernameInput' /*onChange={storeUsername}*/
          ></input>
          <br></br>
          password:{' '}
          <input
            type='password'
            id='passwordInput' /*onChange={storePassword}*/
          ></input>
          <button type='submit' id='loginButton' onClick={loginAccount}>
            login!
          </button>
        </form>
      </div>
      <button onClick={handleClick} id='signup'>
        Don't have an account? Sign up!
      </button>
    </div>
  );
};

export default Login;
