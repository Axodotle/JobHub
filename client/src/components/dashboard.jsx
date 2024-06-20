import React from 'react';
import { useState } from 'react';
import ApplicationList from './application-list-component/application-list.jsx';
import Sidebar from './sidebar';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/actions';
import Login from './login.jsx';

const dashboard = ({ userState }) => {
  const [date_applied, setDateApplied] = useState(''); //are these necessary?
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
    const company = document.querySelector('#company');
    const date = document.querySelector('#start');
    const appStatus = document.querySelector('#status');
    const role = document.querySelector('#role');
    const notes = document.querySelector('#notes');

    const formObj = {
      company: company.value,
      date_applied: date.value,
      status: appStatus.value,
      role: role.value,
      notes: notes.value,
    };
    console.log('formObj', formObj);

    dispatch(actions.addCard(formObj));
    //clear form values
    company.value = '';
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

/******************************
 * THESE USERSNAMES ALSO WORK *
 *          "bjones"          *
 *         "clarkson"         *
 *         "djohnson"         *
 *        "ewilliams"         *
 *         "fmartin"          *
 *          "gking"           *
 ******************************/
        body: JSON.stringify({ username: userState, ...formObj }),
        // body: JSON.stringify({
        //   username: 'hharris',
        //   company: 'Codesmith',
        //   date_applied: '2024-06-13',
        //   notes: 'Does this work?',
        //   role: 'Fellow',
        //   status: 'Rejected',
        // }),
      });
      const data = await response.json();
      console.log('Response from DB Server: ', data);
    } catch (err) {
      console.log('Fetch error: ', err);
    }
  };

  return (
    //move job app form into separate component if there's time
    <div className='main'>
      {/* <h1 className='header'>JobHub</h1> */}
      <div className='dashboard-top-container'>
        <div className='form_box'>
          <h2>Welcome back, {userState}!</h2>
          <form className='inputs'>
            {' '}
            Job Application Form:
            <input
              type='text'
              id='company'
              placeholder='Company Name: '
              required
            ></input>
            <label htmlFor='date_applied' id='date_applied'>
              Date Applied:
            </label>
            <input
              type='date'
              id='start'
              name='date_applied'
              value={date_applied}
              min='2024-01-01'
              max='2028-12-31'
              onChange={handleOnChange}
              required
            />
            <form className='status'>
              <select name='Status' id='status' onChange={handleAppStatus} required='true'>
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
            <input type='text' id='role' placeholder='Role: ' required='true'></input>
            <input type='text' id='notes' placeholder='Notes: ' required='true'></input>
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
