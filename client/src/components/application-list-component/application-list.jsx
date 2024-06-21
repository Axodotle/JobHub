import React from 'react';
import ApplicationCard from '../application-card-component/application-card';
import { useSelector } from 'react-redux';
//access state + use map to loop through and create app card components

export default function ApplicationList() {
  const appsList = useSelector((store) => store.applications.appsList);

  const appsListDisplay = appsList.map((app) => {
    //add notes to the application card
    return (
      <ApplicationCard
        company={app.company}
        date_applied={app.date_applied}
        status={app.status}
        role={app.role}
        notes={app.notes}
      />
    );
  });
  return (
    <div className='application-list' id='application_list'>
      {/* <ApplicationCard
        companyName={'McDonalds'}
        dateApplied={'10 / 25 / 2023'}
        status={'Applied'}
        role={'Branch Manager'}
        notes={'Am I aiming too high???'}
      />
      <ApplicationCard
        companyName={'Wendys'}
        dateApplied={' 02 / 22 / 2024'}
        status={'Rejected'}
        role={'Cashier'}
        notes={'Manager said I have to be better at math'}
      />
      <ApplicationCard
        companyName={'Burger King'}
        dateApplied={'04 / 15 / 2024'}
        status={'Have not heard back'}
        role={'Custodian'}
        notes={'Please hire me!!!'}
      /> */}
      {appsListDisplay}
    </div>
  );
}
