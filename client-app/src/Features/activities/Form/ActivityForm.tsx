import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../App/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Activity } from '../../../App/models/activity';
import LoadingComponent from '../../../App/layout/LoadingComponent';
import { v4 as uuid } from "uuid";


export default observer( function ActiviyForm(){
    const {activityStore}=useStore();
    const {id} =useParams();
    const naviagate =useNavigate();
    const [activity,setActivity]=useState<Activity>(
        {
            id: '',
            title: '',
            date: '',
            description: '',
            category: '',
            city: '',
            venue: ''
        }
    );

    useEffect(()=>{
        if (id) {
            activityStore.loadActivity(id).then((activity)=>{setActivity(activity!)})
        }
    },[id,activityStore.loadActivity])
    
    function handleSubmit() {
        if (!activity.id) {
            activity.id = uuid();
            activityStore.createActivity(activity).then(()=>{naviagate(`/activities/${activity.id}`)})
        }else{
            activityStore.updateActivity(activity).then(()=>{naviagate(`/activities/${activity.id}`)})
        }
    }

    function handleInputChange(event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) {
        const {name,value}=event.target;
        setActivity({...activity, [name]:value});
    }
    if(activityStore.loadingInitial)return<LoadingComponent content='loading...'/>

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Title'value={activity.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button loading={activityStore.loading} floated='right' positive type='submit' content='submit'/>
                <Button as={Link} to='/activities' floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
})