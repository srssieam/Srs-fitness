import loginBg from '../assets/loginbg.jpg'
import { MdEmail } from 'react-icons/Md';
import { FaLock } from 'react-icons/Fa';
import { FcGoogle } from 'react-icons/Fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

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
    const { userLogin, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log('from login page', location)

    // console.log(window.location)


    const handleLogin = (e) => {
        e.preventDefault();
        console.log('form submitted')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)

        // email and password login
        userLogin(email, password)
            .then(res => {
                // console.log(res.user)
                setLoginError(null)
                Swal.fire(
                    'Login Successful',
                    'Thank you for being with us',
                    'success'
                );
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message,'from login')
                setLoginError('Wrong Email or Password !')
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Something went wrong!',
                })
            })

        // clearing input fields after submission
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.password.value = '';
    }

    // google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire(
                    'Login Successful',
                    'Thank you for being with us',
                    'success'
                  )
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err)
            })

    }

    useEffect(() => {
        AOS.init({
            disable: window.innerWidth < 1000
          });
      }, [])

    return (
        <div style={loginStyle}>
            <div className='md:flex justify-between items-center h-[100%] w-full py-10'>
                <div className='bg-transparent md:w-3/5 h-full flex flex-col justify-around px-5 md:px-8 lg:px-20 text-white' data-aos="fade-right"  data-aos-duration="2000">
                    <div>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>Welcome !</h1>
                        <p className='text-xl md:text-2 lg:text-4xl font-semibold md:py-3 lg:py-6'>To Srs Fitness</p>
                    </div>
                    <div>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Wellness Starts Here.</h1>
                        <h3 className='text:lg md:xl lg:text-3xl font-semibold py-5'>We are committed to <br /> bringing happiness into your life.</h3>
                    </div>
                </div>


                <div className='md:w-2/5 h-full flex items-center bg-transparent backdrop-blur-xl p-4 md:p-6 lg:p-11 md:mr-5 lg:mr-10 rounded-3xl' data-aos="fade-left"  data-aos-duration="2000">
                    <div className='w-full'>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold py-2 md:py-3 lg:py-7 text-white'>Login</h1>
                        <form className='md:space-y-3 lg:space-y-8' onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className=' text-white font-semibold text-lg lg:text-2xl'>Your Email : </label><br />
                                <div className='flex items-center border-b-2 border-cyan-500'>
                                    <input type="email" name="email" id="email" className='text-white outline-none bg-transparent w-full px-2 py-1' required />
                                    <MdEmail className='text-2xl text-cyan-500'></MdEmail>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className=' text-white font-semibold text-lg lg:text-2xl'>Your Password : </label><br />
                                <div className='flex items-center border-b-2 border-cyan-500'>
                                    <input type="password" name="password" id="password" className='text-white outline-none bg-transparent w-full px-2 py-1' required />
                                    <FaLock className='text-2xl text-cyan-500'></FaLock>
                                </div>
                            </div>
                            <div>
                                <p className='text-red-700 text-lg lg:text-2xl font-semibold'>{loginError}</p>
                            </div>
                            <div>
                                <p className='text-white text-lg'>Do not have any account ? <Link to="/register" className='hover:underline text-cyan-500'>register</Link> now.</p>
                            </div>
                            <div>
                                <input type="submit" value="Login" className='btn text-xl bg-slate-900 normal-case font-semibold text-cyan-500 hover:border-cyan-400' />
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className='mt-4 hover:scale-110 transition-transform flex gap-4 items-center px-4 py-2 text-white bg-transparent border border-cyan-600 rounded-lg'>Login with google <FcGoogle className='text-xl'></FcGoogle></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;