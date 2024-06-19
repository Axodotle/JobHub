import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import './styles.css';

const Login = () => {
  const [userState, changeUserState] = useState('initState');
  useEffect(() => {
    //Maybe pass the username to the backend inside the useEffect hook.
    console.log('userState2', userState);
  });
  console.log('userState1', userState);
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

    // try {
    console.log('before fetch');

    await changeUserState(newUsername.value);
    console.log('newUsername.value', newUsername.value);
    //   const response = await fetch('http://localhost:3000/users/login', {
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //     body: JSON.stringify({
    //       username: newUsername.value,
    //       password: newPassword.value,
    //     }),
    //   });
    //   console.log('response ', response);
    //   const data = await response.json();
    //   if (data) {
    //     //Uncomment when backend connection is set up
    //     // const [userState, changeUserState] = useState('');
    //     // changeUserState(newUsername.value);
    //     // console.log('userState', userState);
    //     navigate('/users/dashboard'); //Update state with current users username?
    //   }
    //   console.log(data);
    // } catch (err) {
    //   alert('bad');
    // }
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
