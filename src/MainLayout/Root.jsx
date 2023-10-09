import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";


const Root = () => {
    const loc = useLocation();
    useEffect(()=>{
        document.title = loc.pathname;
        document.title = `SrsFitness ${loc.pathname.replace("/","-")}`;
    },[loc.pathname])
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
