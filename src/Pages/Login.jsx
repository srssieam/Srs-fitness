import loginBg from '../assets/loginbg.jpg'
import { MdEmail } from 'react-icons/Md';
import { FaLock } from 'react-icons/Fa';
import { FcGoogle } from 'react-icons/Fc';
import { Link } from 'react-router-dom';
const loginStyle = {
    background: `url(${loginBg})`,
    width: '100%',
    minHeight: '85vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
}
const Login = () => {
    const handleLogin = (e)=>{
        e.preventDefault();
        console.log('form submitted')
    }
    return (
        <div style={loginStyle}>
            <div className='flex justify-between items-center h-[100%] w-full py-10'>
                <div className='bg-transparent w-3/5 h-full flex flex-col justify-around px-20 text-white'>
                    <div>
                        <h1 className='text-6xl font-semibold'>Welcome !</h1>
                        <p className='text-4xl font-semibold py-6'>To Srs Fitness</p>
                    </div>
                    <div>
                        <h1 className='text-5xl font-semibold'>Wellness Starts Here.</h1>
                        <h3 className='text-3xl font-semibold py-5'>We are committed to <br /> bringing happiness into your life.</h3>
                    </div>
                </div>
                <div className='w-2/5 h-full flex items-center bg-transparent backdrop-blur-xl p-11 mr-10 rounded-3xl'>
                    <div className='w-full'>
                    <h1 className='text-4xl font-semibold py-7 text-white'>Login</h1>
                    <form className=' space-y-8' onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className=' text-white font-semibold text-2xl'>Your Email : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="email" name="email" id="email" className='text-white outline-none bg-transparent w-full px-2 py-1' required />
                                <MdEmail className='text-2xl text-cyan-500'></MdEmail>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className=' text-white font-semibold text-2xl'>Your Password : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="password" name="password" id="password" className='text-white outline-none bg-transparent w-full px-2 py-1' required />
                                <FaLock className='text-2xl text-cyan-500'></FaLock>
                            </div>
                        </div>
                        <div>
                            <p className='text-white text-lg'>Do not have any account ? <Link to="/register" className='hover:underline text-cyan-500'>register</Link> now.</p>
                        </div>
                        <div>
                            <input type="submit" value="Login" className='btn text-xl bg-slate-900 normal-case font-semibold text-cyan-500 hover:border-cyan-400' />
                        </div>
                    </form>
                    <button className='mt-4 hover:scale-110 transition-transform flex gap-4 items-center px-4 py-2 text-white bg-transparent border border-cyan-600 rounded-lg'>Login with google <FcGoogle className='text-xl'></FcGoogle></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;