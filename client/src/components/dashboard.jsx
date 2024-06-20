import React from 'react';
import { useState } from 'react';
import ApplicationList from './application-list-component/application-list.jsx';
import Sidebar from './sidebar';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/actions';
import Login from './login.jsx';

const dashboard = ({ userState }) => {
  const [dateApplied, setDateApplied] = useState(''); //are these necessary?
  const [appStatus, setAppStatus] = useState('');
  console.log('userState', userState);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    setDateApplied(e.target.value);
  };

  const handleAppStatus = (e) => {
    e.preventDefault();
    setAppStatus(e.target.value);
  };

  //add error handling so user can't submit without filling in all inputs
  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyName = document.querySelector('#company_name');
    const date = document.querySelector('#start');
    const appStatus = document.querySelector('#status');
    const role = document.querySelector('#role');
    const notes = document.querySelector('#notes');

    const formObj = {
      company: companyName.value,
      date_applied: date.value,
      status: appStatus.value,
      role: role.value,
      notes: notes.value,
    };
    console.log('formObj', formObj);

    dispatch(actions.addCard(formObj));
    //clear form values
    companyName.value = '';
    date.value = '';
    appStatus.value = '';
    role.value = '';
    notes.value = '';

    console.log('application to backend', { username: userState, ...formObj });
    // create a request to database with new job app
    try {
      const response = await fetch('/applications/newapp', {
        headers: {
          'Accept': 'application/json', //prettier/eslint reformatting on save
          'Content-Type': 'application/json',
        },
        method: 'POST',
        // body: JSON.stringify({ username: userState, ...formObj }),
        body: JSON.stringify({
        username: "anar5555",
        company: "Codesmith",
        date_applied: "2024-06-13",
        notes: "Does this work?",
        role: "Fellow",
        status: "Rejected",
      }),
      });
      console.log('response', response)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    //move job app form into separate component if there's time
    <div className='main'>
      {/* <h1 className='header'>JobHub</h1> */}
      <div className='dashboard-top-container'>
        <div className='form_box'>
          <form className='inputs'>
            {' '}
            Job Application Form:
            <input
              type='text'
              id='company_name'
              placeholder='Company Name: '
            ></input>
            <label htmlFor='dateApplied' id='dateApplied'>
              Date Applied:
            </label>
            <input
              type='date'
              id='start'
              name='date_applied'
              value={dateApplied}
              min='2024-01-01'
              max='2028-12-31'
              onChange={handleOnChange}
            />
            <form className='status'>
              <select name='Status' id='status' onChange={handleAppStatus}>
                <option value='' selected disabled hidden>
                  Select App Status...
                </option>
                <option value='Applied'>Applied</option>
                <option value='Intial Interview'>Initial Interview</option>
                <option value='Second Interview'>Second Interview</option>
                <option value='Rejected'>Rejected</option>
                <option value='Have not heard back'>Have not heard Back</option>
                <option value='Other'>Other</option>
              </select>
            </form>
            <input type='text' id='role' placeholder='Role: '></input>
            <input type='text' id='notes' placeholder='Notes: '></input>
            <button type='submit' className='btn' onClick={handleSubmit}>
              Submit
            </button>
          </form>
          <ApplicationList />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default dashboard;
