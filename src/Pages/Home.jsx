import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Trainer from "./Trainer";
import Contact from "./Contact";


const Home = () => {
    const loadedData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service servicesInfo={loadedData}></Service>
            <Trainer></Trainer>
            <Contact></Contact>
        </div>
    );
};

export default Home;