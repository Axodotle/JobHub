import React from 'react';

export default function SidebarBox({ boxHeader, lowerBox }) {
  return (
    <div className='sidebar-box'>
      <div class='box-header'>{boxHeader}</div>
      <div class='lower-box'>{lowerBox}</div>
    </div>
  );
}
