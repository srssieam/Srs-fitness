import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Service from "../Pages/Service";
import Schedule from "../Pages/Schedule";
import Programs from "../Pages/Programs";
import Contact from "../Pages/Contact";
import Trainer from "../Pages/Trainer";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRout from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/service',
                element:<Service></Service>,
            },
            {
                path:'/service-details/:id',
                element:<PrivateRout><ServiceDetails></ServiceDetails></PrivateRout>,
                loader:()=>fetch('/serviceData.json')
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/trainer',
                element:<Trainer></Trainer>
            },
            {
                path:'/schedule',
                element:<PrivateRout><Schedule></Schedule></PrivateRout>
            },
            {
                path:'/programs',
                element:<PrivateRout><Programs></Programs></PrivateRout>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])
export default Router;