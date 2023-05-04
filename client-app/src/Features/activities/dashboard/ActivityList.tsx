import { Header, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react";


export default observer(function ActivityList(){
    const {activityStore}=useStore();

    return(
   
        <>
        {activityStore.groupedActivities.map(([group,activities])=>(
            <Fragment key={group}>
                <Header sub color="teal">
                    {group}
                </Header>
                    {activities.map(activity=>(
                        <ActivityListItem key={activity.id} activity={activity}/>
                    ))}
            </Fragment>
        ))}
        </>
        
   
    )
})