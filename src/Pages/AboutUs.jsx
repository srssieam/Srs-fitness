import { useEffect } from 'react';
import doctorImg from '../assets/Doctor.jpg'
import approchImg from '../assets/approch.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            disable: window.innerWidth < 1000
          });
      }, [])
    return (
        <div className="my-14 mx-5">
            <h1 className="mb-16 text-5xl text-center font-bold" data-aos="fade-down" data-aos-duration="2000">About us</h1>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="bg-gray-800 flex flex-col gap-8 md:flex-row justify-around text-cyan-400 font-semibold text-xl w-3/5 p-7 mx-auto rounded-3xl shadow-xl shadow-cyan-400">
                <div className="text-center">
                    <h3>10+ years <br />Experience</h3>
                </div>
                <div className="text-center">
                    <h3>200+ <br />Members</h3>
                </div>
                <div className="text-center">
                    <h3>20+ <br />Personal Trainer</h3>
                </div>
            </div>
            <div className="mt-12">
                <p className="md:text-xl text-justify" data-aos="zoom-in-up" data-aos-duration="2000">At Srs fitness, we believe that living a healthy and fulfilling life is a journey,
                    and we're here to guide you every step of the way. Our mission is to empower individuals
                    to embrace wellness, achieve their health goals, and experience the joy of a balanced and vibrant life.
                    At Srs fitness, we take a holistic approach to health and wellness. We understand that well-being
                    encompasses not only physical health but also mental, emotional, and spiritual aspects of your life.
                    That's why we offer a wide range of services and resources to cater to your unique needs.
                </p>
            </div>
            <div className='mt-5'>
                <h1 className='text-3xl underline text-cyan-500'>Our Story</h1>
                <div className="flex flex-col-reverse md:flex-row gap-9 items-center mt-3">
                    <div className='md:text-xl flex-1 text-justify'  data-aos="fade-down-right" data-aos-duration="2000">
                        <p>
                        Founded in 20XX by Dr. Sarah Johnson, a passionate advocate for holistic health and well-being,
                        Srs fitness was born out of a vision to create a space where people from all walks of life
                        could find the support and resources they need to live their healthiest lives. <br /> <br /> 
                        Dr. Johnson's own transformative wellness journey inspired the creation of this haven. Her personal
                        struggles and triumphs have fueled her commitment to helping others discover their
                        true potential through wellness.
                        </p>
                    </div>
                    <div className='flex-1'>
                        <img src={doctorImg} alt="" className='lg:w-2/3 md:float-right' data-aos="fade-up-left" data-aos-duration="2000"/>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-3xl underline text-cyan-500'>Our Approach</h1>
                <div className="md:flex flex-row-reverse gap-9 items-center md:mt-8">
                    <div className='md:text-xl flex-1 text-justify' >
                        <p data-aos="fade-down-left" data-aos-duration="2000">
                        At Srs fitness, we take a holistic approach to health and wellness. We understand that well-being
                        encompasses not only physical health but also mental, emotional, and spiritual aspects of your life.
                        That's why we offer a wide range of services and resources to cater to your unique needs.. <br /> <br />
                        Our team of dedicated wellness experts includes certified nutritionists, fitness trainers,
                        mindfulness coaches, and holistic healers. Together, we provide a comprehensive toolkit to
                        help you achieve your wellness goals.
                        </p>
                    </div>
                    <div className='flex-1'>
                        <img src={approchImg} alt="" className='lg:w-2/3'  data-aos="fade-up-right" data-aos-duration="2000" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;