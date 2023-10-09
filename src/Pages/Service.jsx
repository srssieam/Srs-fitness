
import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Service = () => {
    const [servicesInfo, setSevicesInfo] = useState([])
    // console.log(servicesInfo)
    useEffect(()=>{
        fetch('/serviceData.json')
        .then(res => res.json())
        .then(data => setSevicesInfo(data))
    },[])
    useEffect(() => {
        AOS.init();
      }, [])
    
    return (
        <div className='my-16 mx-7'>
            <h1 className="mb-16 text-5xl text-center font-bold" data-aos="fade-down" data-aos-duration="2000">Our Services</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11">
                {
                    servicesInfo?.map(service =><ServiceCard key={service.id} serviceInfo={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;