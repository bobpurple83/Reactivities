import React from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetail from "../detail/ActivityDetail";  
import ActiviyForm from "../Form/ActivityForm";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";


export default observer(function ActivityDashboard(){
    const {activityStore}=useStore();
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList/>
            </Grid.Column>
            <Grid.Column width='6'>
                {activityStore.selectedActivity && !activityStore.editMode&&
                <ActivityDetail/>}
                {activityStore.editMode&&
                <ActiviyForm/>}
            </Grid.Column>
        </Grid>
    )
})