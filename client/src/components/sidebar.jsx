import React from 'react';
import SidebarBox from './sidebarBox';
import { useSelector } from 'react-redux';
import store from '../redux/store.jsx';

export default function Sidebar() {
  const totalApps = useSelector((store) => store.totalApps);
  console.log(totalApps);

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
