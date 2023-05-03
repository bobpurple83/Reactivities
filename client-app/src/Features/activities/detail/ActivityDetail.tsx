import React, { useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../App/layout/LoadingComponent";


export default observer(function ActivityDetail(){
  const {activityStore}=useStore();
  const {id} = useParams();

  useEffect(()=>{
    if (id) activityStore.loadActivity(id);
  },[id,activityStore.loadActivity]);

  if (!activityStore.selectedActivity) return <LoadingComponent/>;
  return(
      <Card fluid>
        <Image src={`/assets/categoryImages/${activityStore.selectedActivity.category}.jpg`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{activityStore.selectedActivity.title}</Card.Header>
          <Card.Meta>
            <span>{activityStore.selectedActivity.date}</span>
          </Card.Meta>
          <Card.Description>
            {activityStore.selectedActivity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group widths='2'>
            <Button as={Link} to={`/manage/${activityStore.selectedActivity.id}`} basic color="blue" content='Edit'/>
            <Button as={Link} to={`/cancel/${activityStore.selectedActivity.id}`} basic color="blue" content='Cancel'/>
          </Button.Group>
        </Card.Content>
      </Card>
    )
      
})