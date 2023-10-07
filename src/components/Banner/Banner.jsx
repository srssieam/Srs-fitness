import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
    const bannerStyles={
        background: `url(${bannerImg})`,
        backgroundOpacity: '0.5',
        width: '100%',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return (
        <div style={bannerStyles} className='relative'>
            <div className='flex flex-col gap-6'>
            <h1 className='text-[5vw] text-white font-semibold bg-[#18b384a9] py-6 px-7 text-center'>Where Health <br /> Meets Happiness</h1>
            <button className='px-5 py-3 bg-slate-900 border-2 border-cyan-500 text-white text-2xl rounded-3xl hover:text-cyan-500 transition-transform hover:scale-125 w-[200px] mx-auto'>Get Started</button>
            </div>
            <dir className="absolute w-full h-40 bottom-[-18px] bg-gradient-to-t from-[#23252b] to-transparent"></dir>
        </div>
    );
};

export default Banner;