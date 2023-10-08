import { NavLink } from "react-router-dom";
import "./NavStyle.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import defaultUser from "../../assets/defaultUser.jpg"
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);
    console.log(user)

    const handleLink=()=>{
        if(!user){
            Swal.fire({
                icon: 'warning',
                title: 'Login first',
                text: 'You can not view this page without login ',
              })
        }
    }
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/service'>Services</NavLink></li>
        <li><NavLink to='/trainer'>Our trainers</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
        <li onClick={handleLink}><NavLink to='/schedule'>Schedule</NavLink></li>
        <li onClick={handleLink}><NavLink to='/programs'>Your Programs</NavLink></li>
    </>
    return (
        <div className="navbar bg-[#1b1b1b] py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="text-white font-bold normal-case text-xl md:text-2xl lg:px-4">SrS <span className="text-cyan-400">fitness</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>

            {
                user ?
                    <div className="navbar-end text-white font-semibold flex gap-2 md:mr-3">
                        <div className="flex flex-col items-center">
                        <img src={user.photoURL? user.photoURL : defaultUser} className="h-[35px] w-[35px] rounded-full" alt="" />
                        {
                            user.displayName ? <p>{user.displayName}</p> : <p>{user.email.slice(0,8)}</p>
                        }
                        </div>
                        <button onClick={()=>{userLogout()}} className="px-3 py-1 bg-gray-900 text-white rounded-md border hover:border-cyan-600 hover:text-cyan-400">Logout</button>
                    </div>
                    : <div className="navbar-end text-white font-semibold flex gap-2 md:mr-3">
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-cyan-400" : "hover:underline hover:text-cyan-400"
                            }>Login
                        </NavLink>
                        <span>/</span>
                        <NavLink
                            to="/register"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline text-cyan-400" : "hover:underline hover:text-cyan-400"
                            }>Register
                        </NavLink>
                    </div>
            }
        </div>
    );
};

export default Navbar;