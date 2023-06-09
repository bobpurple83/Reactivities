import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../App/layout/LoadingComponent";
import ActivityFilters from "./ActivityFilters";


export default observer(function ActivityDashboard(){
    const {activityStore}=useStore();
    useEffect(()=>{
        if(activityStore.activityRegistry.size<=1) activityStore.loadActivities();
    },[activityStore,activityStore.activityRegistry])
  
    if (activityStore.loadingInitial)  return <LoadingComponent content={'Loading App'}/> 
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters/>
            </Grid.Column>
        </Grid>
    )
})