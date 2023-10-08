import registerBg from '../assets/ragisterbg.jpg'
import { MdEmail } from 'react-icons/Md';
import { FaLock, FaUserAlt } from 'react-icons/Fa';
import { Link } from 'react-router-dom';

const regiStyle = {
    background: `url(${registerBg})`,
    width: '100%',
    minHeight: '85vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
}
const Register = () => {
    const handleRegister = (e)=>{
        e.preventDefault();
        console.log('register')
    }
    return (
        <div>
            <div style={regiStyle}>
            <div className='flex justify-between items-center h-[100%] w-full py-10'>
                <div className='bg-transparent w-3/5 h-full flex flex-col gap-9 justify-around px-20 text-white'>
                    <div>
                        <h1 className='text-6xl font-semibold'>Welcome !</h1>
                        <p className='text-4xl font-semibold py-6'>To Srs Fitness</p>
                    </div>
                    <div>
                        <h1 className='text-5xl font-semibold'>Wellness Starts Here.</h1>
                        <h3 className='text-3xl font-semibold py-5'>We are committed to <br /> bringing happiness into your life.</h3>
                    </div>
                </div>
                <div className='w-2/5 h-full flex items-center bg-transparent backdrop-blur-xl p-10 mr-10 rounded-3xl'>
                    <div className='w-full'>
                    <h1 className='text-4xl font-semibold py-7 text-white'>Register</h1>
                    <form onSubmit={handleRegister} className=' space-y-8'>
                        <div>
                            <label htmlFor="name" className=' text-white font-semibold text-2xl'>Your Name : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="text" name="name" id="name" className='outline-none bg-transparent w-full px-2 py-1' />
                                <FaUserAlt className='text-2xl text-cyan-500'></FaUserAlt>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className=' text-white font-semibold text-2xl'>Your Email : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="email" name="email" id="email" className='outline-none bg-transparent w-full px-2 py-1' required />
                                <MdEmail className='text-2xl text-cyan-500'></MdEmail>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className=' text-white font-semibold text-2xl'>Your Password : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="password" name="password" id="password" className='outline-none bg-transparent w-full px-2 py-1' required />
                                <FaLock className='text-2xl text-cyan-500'></FaLock>
                            </div>
                        </div>
                        <div>
                            <p className='text-white text-lg'>Already have account ? <Link to="/login" className='hover:underline text-cyan-500'>Login</Link> please.</p>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className='btn bg-slate-900 text-xl normal-case font-semibold text-cyan-500 hover:border-cyan-400' />
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Register;