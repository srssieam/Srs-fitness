
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='h-[85vh] w-full flex justify-center items-center px-5'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-4xl text-red-700'>Oopps !!!</h1>
                <p>{error.statusText || error.message}</p>
                {
                    error.status === 404 && <div>
                        <h3 className='text-xl md:text-3xl text-red-700 my-6'>Page not found</h3>
                        <p className='text-xl'> Back to <Link to="/"><button className='btn text-cyan-600'>Home</button></Link></p>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;