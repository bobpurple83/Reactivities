import { createBrowserRouter,RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../Features/home/HomePage";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../Features/activities/Form/ActivityForm";
import ActivityDetail from "../../Features/activities/detail/ActivityDetail";
export const routes:RouteObject[]=[
    {
        path:'/',
        element:<App/>,
        children:[
            {path:'activities', element:<ActivityDashboard/>},
            {path:'activities/:id', element:<ActivityDetail/>},
            {path:'createActivity', element:<ActivityForm key='create'/>},
            {path:'manage/:id', element:<ActivityForm key='manage'/>}
        ]
    }
];
export const router = createBrowserRouter(routes);