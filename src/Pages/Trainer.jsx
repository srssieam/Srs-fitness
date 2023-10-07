import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fitnessTrainer from '../assets/fitness trainer.jpg'
import yogaTeacher from '../assets/yoga master.jpg'
import therapist from '../assets/massager.jpg'
import psychologist from '../assets/mental Doctor.jpg'
import dietInstructor from '../assets/diet instructor.jpg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/Fa';

const Trainer = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    const links = <div className="flex justify-center gap-7 mt-2">
        <a href="" className='p-3 bg-white rounded-full'><FaFacebookF className='text-blue-700 text-xl'></FaFacebookF></a>
        <a href="" className='p-3 bg-white rounded-full'><FaTwitter className='text-blue-700 text-xl'></FaTwitter></a>
        <a href="" className='p-3 bg-white rounded-full'><FaInstagram className='text-blue-700 text-xl'></FaInstagram></a>
    </div>
    return (
        <div className='my-20 mx-7'>
            <h1 className="mb-16 text-5xl text-center font-bold">Our Trainers</h1>
            <Slider {...settings}>
                <div className="card card-compact w-full bg-base-100 shadow-xl p-4 lg:p-10 border border-cyan-600 shadow-cyan-600">
                    <figure className='h-[400px]'><img src={fitnessTrainer} alt="instructor" /></figure>
                    <div className="text-center">
                        <h2 className="mx-auto">James Johnson</h2>
                        <p className='text-cyan-400 text-lg font-semibold'>fitness Instructor</p>
                        {
                            links
                        }
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl p-4 lg:p-10 border border-cyan-600 shadow-cyan-600">
                    <figure className='h-[400px]'><img src={therapist} alt="instructor" /></figure>
                    <div className="text-center">
                        <h2 className="mx-auto">John Anderson</h2>
                        <p className='text-cyan-400 text-lg font-semibold'>Psycho therapist</p>
                        {
                            links
                        }
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl p-4 lg:p-10 border border-cyan-600 shadow-cyan-600">
                    <figure className='h-[400px]'><img src={yogaTeacher} alt="instructor" /></figure>
                    <div className="text-center">
                        <h2 className="mx-auto">David Wilson</h2>
                        <p className='text-cyan-400 text-lg font-semibold'>Yoga master</p>
                        {
                            links
                        }
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl p-4 lg:p-10 border border-cyan-600 shadow-cyan-600">
                    <figure className='h-[400px]'><img src={psychologist} alt="instructor" /></figure>
                    <div className="text-center">
                        <h2 className="mx-auto">Daniel Green</h2>
                        <p className='text-cyan-400 text-lg font-semibold'>psychologist</p>
                        {
                            links
                        }
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl p-4 lg:p-10 border border-cyan-600 shadow-cyan-600">
                    <figure className='h-[400px]'><img src={dietInstructor} alt="instructor" /></figure>
                    <div className="text-center">
                        <h2 className="mx-auto">Emily White</h2>
                        <p className='text-cyan-400 text-lg font-semibold'>Diet instructor</p>
                        {
                            links
                        }
                    </div>
                </div>
            </Slider>
        </div>

    );
};

export default Trainer;