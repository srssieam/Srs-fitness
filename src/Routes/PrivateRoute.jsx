import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)
    if (loading) {
        return (
            <div className="w-full h-[80vh] flex items-center justify-center">
                <ThreeCircles
                    height="200"
                    width="200"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
        )
    }
    if (user) {
        return (children)
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;