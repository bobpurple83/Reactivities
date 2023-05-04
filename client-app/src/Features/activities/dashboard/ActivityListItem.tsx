import React, { SyntheticEvent, useState } from "react";
import { Button, Icon, Item, ItemContent, ItemDescription, ItemHeader, Label,Segment,SegmentGroup } from "semantic-ui-react";
import { Activity } from "../../../App/models/activity";
import { Link } from "react-router-dom";
import activityStore from "../../../App/stores/activityStore";
import { useStore } from "../../../App/stores/store";

interface Props{
    activity:Activity
}

export default function ActivityListItem({activity}:Props) {
    const {activityStore}=useStore();
    const [target,setTarget]=useState('');

    function handleActivityDelete(e:SyntheticEvent<HTMLButtonElement>,id:string) {
        setTarget(e.currentTarget.name);
        activityStore.deleteActivity(id);
    }
    return(
        <SegmentGroup>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' />
                        <ItemContent>
                            <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                                </ItemHeader>
                        </ItemContent>
                        <ItemDescription>Hosted by Bob</ItemDescription>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/> {activity.date}
                    <Icon name="marker"/> {activity.venue}
                </span>
            </Segment>
            <Segment secondary >
                Attendees go here 
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button as={Link} to={`/activities/${activity.id}`} color="teal" floated="right" content='View'/>
            </Segment>
        </SegmentGroup>
    )
}