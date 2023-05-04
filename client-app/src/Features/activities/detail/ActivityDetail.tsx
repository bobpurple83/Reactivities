import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../../App/layout/LoadingComponent";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedinfo";
import ActivityDetailedSidebar from "./ActivityDetaileSidebar";
import ActivityDetailedChat from "./ActivityDetaileChat";


export default observer(function ActivityDetail(){
  const {activityStore}=useStore();
  const {id} = useParams();

  useEffect(()=>{
    if (id) activityStore.loadActivity(id);
  },[id,activityStore.loadActivity]);

  if (activityStore.loadingInitial || !activityStore.selectedActivity) return <LoadingComponent/>;
  return(
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activityStore.selectedActivity}/>
        <ActivityDetailedInfo activity={activityStore.selectedActivity}/>
        <ActivityDetailedChat/>
      </Grid.Column>
      <Grid.Column width={6}>
      <ActivityDetailedSidebar/>
      </Grid.Column>
    </Grid>
    )
      
})