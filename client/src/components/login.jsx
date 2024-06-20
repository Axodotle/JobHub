import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import './styles.css';

const Login = () => {
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
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          username: newUsername.value,
          password: newPassword.value,
        }),
      });
      console.log('response ', response);
      const data = await response.json();
      if (data) {
        alert('Welcome Back!');
        navigate('/users/dashboard');
      }
      alert(data);
    } catch (err) {
      alert('bad');
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
        Login
        <form /*onSubmit={handleSubmit}*/ id='loginform'>
          username:{' '}
          <input
            type='text'
            id='usernameInput' /*onChange={storeUsername}*/
          ></input>
          <br></br>
          password:{' '}
          <input
            type='text'
            id='passwordInput' /*onChange={storePassword}*/
          ></input>
          <button type='submit' id='loginButton' onClick={loginAccount}>
            login!
          </button>
        </form>
      </div>
      <button onClick={handleClick} id='signup'>
        sign up
      </button>
    </div>
  );
};

export default Login;
