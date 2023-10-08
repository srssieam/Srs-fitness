import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Programs = () => {
    const [addedPackages, setAddedPackages] = useState([]);
    const [noPackagesFound, setNoPackagesFound] = useState();

    useEffect(() => {
        const programs = JSON.parse(localStorage.getItem('Programs'));
        if (programs) {
            setAddedPackages(programs)
        } else {
            setNoPackagesFound('You have not enrolled any packages yet !!')
        }
    }, [])
    console.log(addedPackages)
    return (
        <div>
            {
                addedPackages.length > 0 ?
                    <div className="min-h-[80vh] p-3 md:p-12">
                        <p className="text-xl md:text-3xl font-semibold">Total programs to be completed: {addedPackages.length}</p>
                        {
                            addedPackages?.map(program => {
                                return (
                                    <div key={program.id} className="flex justify-between w-full border-b font-semibold border-cyan-500 md:p-3 mb-4">
                                        <li className=" md:text-2xl text-cyan-600 list-disc">{program.title}</li>
                                        <p className="text-sm md:text-base">Pending</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className="h-[80vh] p-6 md:p-12 flex justify-center items-center">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-6xl font-semibold text-cyan-600">{noPackagesFound}</h1>
                            <p className="text-xl md:text-3xl mt-6">Let's inspact our <Link to='/service' className="text-cyan-600 font-semibold hover:underline">services</Link>.</p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Programs;