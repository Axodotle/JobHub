import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ApplicationCard = ({ company, date_applied, status, role, notes }) => {
  return (
    <div className='application-card'>
      <h3>{company}</h3>
      <p>Date Applied: {date_applied}</p>
      <p>Application Status: {status}</p>
      <p>Role: {role}</p>
      <p>Notes: {notes}</p>
    </div>
  );
};
export default ApplicationCard;
