import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const ServiceDetails = () => {

    const { id } = useParams();
    console.log(id)
    const loadedData = useLoaderData([])
    // console.log(loadedData,'im loaded')

    const [serviceData, setServiceData] = useState({})
    useEffect(() => {
        const findService = loadedData?.find(service => service.id == id);
        setServiceData(findService);
    }, [id, loadedData])
    // console.log(serviceData)

    const { title, image, details, Price } = serviceData;


    const handleEnroll = () => {

        // sweet alerts
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: `This package will cost ${Price} $`,
            text: `Are you sure !`,
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, cancel!',
            confirmButtonText: 'Yes, Proceed!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Successful!',
                    'Thank you for choosing to enroll in our course!',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'We appreciate your decision :)',
                    'error'
                )
            }
        })

        

        // save enrolled packages to localStorage
        const enrolledCoursesArray = [];
        const enrolledCourses = JSON.parse(localStorage.getItem('Programs'));
        if (!enrolledCourses) {
            enrolledCoursesArray.push(serviceData);
            localStorage.setItem('Programs', JSON.stringify(enrolledCoursesArray));
        } else {
            const isExist = enrolledCourses.find(corse => corse.id === serviceData.id) // step 7
            if (!isExist) {
                enrolledCoursesArray.push(...enrolledCourses, serviceData) // step 8
                localStorage.setItem('Programs', JSON.stringify(enrolledCoursesArray))  // step 9
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'You have already enrolled this package',
                })
            }
        }
    }


    return (
        <div>
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base md:text-3xl font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {title}
                        </p>
                        <button onClick={handleEnroll}
                            className=" select-none rounded-lg bg-slate-900 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            enroll now
                        </button>
                    </div>
                    <p className="block text-justify font-sans text-sm md:text-xl font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;