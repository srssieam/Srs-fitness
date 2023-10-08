import registerBg from '../assets/ragisterbg.jpg'
import { MdEmail } from 'react-icons/Md';
import { FaLock, FaUserAlt } from 'react-icons/Fa';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

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
    const [errorMessege, setErrorMessege]=useState('')
    const {createUser}= useContext(AuthContext)

    const handleRegister = (e)=>{
        e.preventDefault();
        console.log('register')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password)

        // password validation
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
            setErrorMessege('Your password should have at least one uppercase letter, one special character and not less then 6 character')
            Swal.fire({
                icon: 'error',
                title: 'Registration failed!',
                text: ' try again',
              })
            return;
        }

        // sweet alert for successful registration
        Swal.fire(
            'Registration Successful',
            'Thank you for being with us',
            'success'
          )

        createUser(email,password)
            .then(res =>{
                console.log(res.user)
            })
            .catch(err =>{
                console.log(err)
            })

        // clearing input fields after submission
        e.target.name.value = '';
        e.target.email.value = '';
        e.target.password.value = '';
        setErrorMessege('');

    }
    return (
        <div>
            <div style={regiStyle}>
            <div className='md:flex justify-between items-center h-[100%] w-full py-10'>
                <div className='bg-transparent w-3/5 h-full flex flex-col md:gap-9 justify-around px-5 md:px-8 lg:px-20 text-white'>
                    <div>
                        <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold'>Welcome !</h1>
                        <p className='text-xl md:text-2 lg:text-4xl font-semibold md:py-3 lg:py-6'>To Srs Fitness</p>
                    </div>
                    <div>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-semibold'>Wellness Starts Here.</h1>
                        <h3 className='text:lg md:xl lg:text-3xl font-semibold py-5'>We are committed to <br /> bringing happiness into your life.</h3>
                    </div>
                </div>
                <div className='md:w-2/5 h-full flex items-center bg-transparent backdrop-blur-xl  p-4 md:p-6 lg:p-11 md:mr-5 lg:mr-10 rounded-3xl'>
                    <div className='w-full'>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-semibold py-2 md:py-3 lg:py-7 text-white'>Register</h1>
                    <form onSubmit={handleRegister} className='md:space-y-3 lg:space-y-8'>
                        <div>
                            <label htmlFor="name" className=' text-white font-semibold text-lg lg:text-2xl'>Your Name : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="text" name="name" id="name" className='outline-none bg-transparent w-full px-2 py-1' />
                                <FaUserAlt className='text-2xl text-cyan-500'></FaUserAlt>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className=' text-white font-semibold text-lg lg:text-2xl'>Your Email : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="email" name="email" id="email" className='outline-none bg-transparent w-full px-2 py-1' required />
                                <MdEmail className='text-2xl text-cyan-500'></MdEmail>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className=' text-white font-semibold text-lg lg:text-2xl'>Your Password : </label><br />
                            <div className='flex items-center border-b-2 border-cyan-500'>
                                <input type="password" name="password" id="password" className='outline-none bg-transparent w-full px-2 py-1' required />
                                <FaLock className='text-2xl text-cyan-500'></FaLock>
                            </div>
                        </div>
                        <div>
                            <p className='text-red-700 text-2xl font-semibold'>{errorMessege}</p>
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