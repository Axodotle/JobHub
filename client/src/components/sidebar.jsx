import React from 'react';
import SidebarBox from './sidebarBox';
import { useSelector } from 'react-redux';
import store from '../redux/store.jsx';

export default function Sidebar() {
  const totalApps = useSelector((store) => store.applications.totalApps);
  console.log('totalApps', totalApps);

  //find apps that were submitted today
  const appsList = useSelector((store) => store.applications.appsList);
  let counter = 0;
  function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const date = getFormattedDate();
  console.log('date', date);
  appsList.forEach((app) => {
    console.log('app.date_applied', app.date_applied);
    if (app.date_applied === date) counter++;
  });

  return (
    <div className='sidebar-container'>
      <SidebarBox boxHeader='Total Applications: ' lowerBox={totalApps} />
      <SidebarBox boxHeader="Today's Applications: " lowerBox={counter} />
      <SidebarBox
        id='interview-box'
        boxHeader='Next Interview: '
        lowerBox='Wednesday 3 PM EST'
      />
    </div>
  );
}
