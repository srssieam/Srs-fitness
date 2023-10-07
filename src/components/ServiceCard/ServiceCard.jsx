

const ServiceCard = ({serviceInfo}) => {
    // console.log(serviceInfo)
    const {id, title, image, description, details, Price} = serviceInfo;
    return (

        <div className="card card-compact bg-base-100 border shadow-cyan-700 shadow-xl">
            <figure className="h-[250px]"><img src={image} alt="img" className="h-full w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions flex justify-between items-center">
                        <p>Price: {Price} $</p>
                    <button className="btn normal-case bg-slate-900 hover:border-cyan-400 hover:bg-slate-700 text-cyan-500">Inspact</button>
                </div>
            </div>
        </div>


    );
};

export default ServiceCard;