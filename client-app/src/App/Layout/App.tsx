import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import ActivityDashboard from '../../Features/activities/dashboard/ActivityDashboard';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import NavBar from './NavBar';
import LoadingComponent from './LoadingComponent';

export default observer (function App() {
  const {activityStore}=useStore();
  useEffect(()=>{activityStore.loadActivities()},[activityStore])

  if (activityStore.loadingInitial)  return <LoadingComponent content={'Loading App'}/> 

  return (
    <>
     <NavBar />
     <Container style={{marginTop:'7em'}}>
      <ActivityDashboard/>
     </Container>
    </>
  );
}

)
