import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { LuLogIn } from "react-icons/lu";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(res => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User LogOut Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/signUp">Register</NavLink></li>
        <li><NavLink to="/apartment">Apartment</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu z-10 menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img  className="h-30 -ml-10 w-22  rounded-full" src="data:image/png;base64,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" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                        <div className="flex gap-2 justify-center items-center">
                            <div className="flex flex-col justify-center items-center mt-3">
                               
                                {/* <h5 className="text-sm ml-3">{user.displayName}</h5> */}
                                <div className="dropdown z-10">
                                    <div tabIndex={0} role="button" className=""> <img className="w-16 h-16 rounded-full" src={user.photoURL} /></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1]  md:-ml-24 menu p-2 shadow bg-base-100 rounded-box md:w-52">
                                        <li className="mx- p-2">{user.displayName}</li>
                                        <li className="bg-blue-100 p-2 rounded-xl"><Link to='/dashboard/userProfile'><button className=" w-20 md:w-full -ml-4 md:ml-0 rounded-xl">Dashboard</button></Link></li>
                                        <li className="bg-red-200 p-1 rounded-xl"><button onClick={handleLogOut} className="bg-red-200 w-full">LogOut</button></li>
                                    </ul>
                                </div>
                            </div>

                            {/* <a  className="btn">LogOut</a> */}
                        </div>


                    </> :
                        <>
                            <button className="bg-green-400 p-2 rounded-xl ">
                                <NavLink to="/login">Login<LuLogIn /></NavLink>
                            </button>
                        </>
                }


            </div>
        </div>
    );
};

export default NavBar;