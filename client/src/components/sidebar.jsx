import React from 'react';
import SidebarBox from './sidebarBox';
import { useSelector } from 'react-redux';
import store from '../redux/store.jsx';

export default function Sidebar() {
  const totalApps = useSelector((store) => store.applications.totalApps);
  console.log('totalApps', totalApps);

  return (
    <div className='sidebar-container'>
      <SidebarBox
        id='interview-box'
        boxHeader='Next Interview: '
        lowerBox='Wednesday 3 PM EST'
      />
      <SidebarBox boxHeader='Total Applications: ' lowerBox={totalApps} />
      <SidebarBox boxHeader="Today's Applications: " lowerBox='5' />
    </div>
  );
}
