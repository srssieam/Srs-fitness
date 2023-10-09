import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/Fa';
import swal from 'sweetalert2'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    const handleSubmit =(e)=>{
        e.preventDefault();
        swal.fire(
            'Good job!',
            'You successfully submitted!',
            'success'
          )
    }
    const links = <div className="flex gap-7 mt-2">
        <a href="https://www.facebook.com/" className='p-3 bg-slate-300 hover:bg-cyan-400 rounded-full'><FaFacebookF className='text-blue-700 text-xl'></FaFacebookF></a>
        <a href="https://twitter.com/" className='p-3 bg-slate-300 hover:bg-cyan-400 rounded-full'><FaTwitter className='text-blue-500 text-xl'></FaTwitter></a>
        <a href="" className='p-3 bg-slate-300 hover:bg-cyan-400 rounded-full'><FaInstagram className='text-pink-700 text-xl'></FaInstagram></a>
    </div>
    return (
        <div className="my-14 mx-5">
            <h1 className="mb-16 text-5xl text-center font-bold" data-aos="fade-down" data-aos-duration="2000">Contact Us</h1>
            <div className="flex flex-col md:flex-row gap-5 items-center lg:gap-11 bg-[#131212] p-11 rounded-xl shadow-lg shadow-cyan-600">
                <div className='text-white space-y-4 flex-1' data-aos="fade-right"  data-aos-duration="2000">
                    <h3 className='text-4xl font-bold'>Srs Sieam</h3>
                    <p className='font-semibold text-2xl'>CEO (srsfitness)</p>
                    <address className='text-xl'>
                        500 Terry Francine Street <br />
                        San Francisco, CA 94158
                    </address>
                    <p className='text-cyan-400 text-lg'>Tel: <a href="" className='hover:underline'>123-456-7890</a></p>
                    <p className='text-cyan-400 text-lg'>Fax: <a href="" className='hover:underline'>123-456-7890</a></p>
                    <p className='text-cyan-400 text-lg'>Email: <a href="" className='hover:underline'>srsfitness@gmail.com</a></p>
                    {links}
                </div>
                <div className='flex-1' data-aos="fade-left"  data-aos-duration="2000">
                    <form className='text-xl' onSubmit={handleSubmit}>
                        <div className='flex flex-col lg:flex-row justify-between gap-4'>
                            <div className='flex-1'>
                                <label htmlFor="name" className='text-cyan-400'>Name :</label><br />
                                <input type="text" name="name" id="name" placeholder='Your name' className='w-full px-3 py-2 md:mt-4' required/>
                            </div>
                            <div className='flex-1'>
                                <label htmlFor="email" className='text-cyan-400'>Email :</label><br />
                                <input type="email" name="email" id="email" placeholder='Your email' className='w-full px-3 py-2 md:mt-4' required/>
                            </div>
                        </div>
                        <div className='my-3'>
                        <label htmlFor="subject" className='text-cyan-400'>Subject :</label><br />
                        <input type="text" name="subject" id="subject" placeholder='subject' className='w-full px-3 py-2 md:mt-4' />
                        </div>
                        <div className='my-3'>
                        <label htmlFor="message" className='text-cyan-400'>Message :</label><br />
                        <textarea name="message" id="message" cols="50" rows="3" placeholder='your message' className='resize-none w-full px-3 py-2 md:mt-4'></textarea>
                        </div>
                        <input type="submit" value="Submit" className='btn bg-slate-900 text-cyan-400 border hover:border-cyan-400'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;