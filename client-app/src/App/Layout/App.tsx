import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../Models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../Features/activities/dashboard/ActivityDashboard';
import {v4 as uuid  } from "uuid";

function App() {

  const [activities,setActivities]=useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity]=useState<Activity | undefined>(undefined);
  const [editMode, seteditMode]=useState(false);

  useEffect(()=>{
    axios.get<Activity[]>('http://localhost:5000/api/activities').then((response)=>{
      setActivities(response.data);
    })
  },[])

  function handleSelectActivity(id:string) {
    setSelectedActivity(activities.find(x=>x.id===id));
  }
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }
function handleFormOpen(id?:string) {
  id? handleSelectActivity(id):handleCancelSelectActivity();
  seteditMode(true);
}
function handleFormClose() {
  seteditMode(false);
}
function handleCreateOrEditActivity(activity:Activity) {
  activity.id  
    ? setActivities([...activities.filter(x => x.id !==activity.id),activity])
    : setActivities([...activities,{...activity,id:uuid()}]);
  seteditMode(false);
  setSelectedActivity(activity);
}
function handleDeleteActivity(id:String) {
  setActivities([...activities.filter(x=>x.id !== id)]);
}

  return (
    <>
     <NavBar openForm={handleFormOpen}/>
     <Container style={{marginTop:'7em'}}>
     <ActivityDashboard 
      activities={activities}
      selectedActivity={selectedActivity}
      selectActivity={handleSelectActivity}
      cancelselectActivity={handleCancelSelectActivity}
      editMode={editMode}
      openForm={handleFormOpen}
      closeForm={handleFormClose}
      createOrEdit={handleCreateOrEditActivity}
      deleteActivity={handleDeleteActivity}
     />
     </Container>
    </>
  );
}

export default App;
