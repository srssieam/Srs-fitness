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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
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
                element:<PrivateRoute><Schedule></Schedule></PrivateRoute>
            },
            {
                path:'/programs',
                element:<PrivateRoute><Programs></Programs></PrivateRoute>
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