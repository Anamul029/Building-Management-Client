import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCarTunnel, FaNoteSticky } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    const isAdmin=true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminProfile">
                                    <FaHome></FaHome>
                                    Admin Profile</NavLink></li>
                                <li><NavLink to="/dashboard/managemember">
                                    <FaUtensils></FaUtensils>
                                    Manage Member</NavLink></li>
                                <li><NavLink to="/dashboard/anouchment">
                                    <FaList></FaList>
                                    Make Anouchment</NavLink></li>
                                <li><NavLink to="/dashboard/agriment">
                                    <FaBook></FaBook>
                                    Agreement Request</NavLink></li>
                                <li><NavLink to="/dashboard/coupon">
                                    <FaUsers></FaUsers>
                                    Manage Coupons</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userProfile">
                                    <FaHome></FaHome>
                                    My Profile</NavLink></li>
                                <li><NavLink to="/dashboard/userAnnouncment">
                                    <FaNoteSticky></FaNoteSticky>
                                    Announcement</NavLink></li>
                               
                            </>
                    }
                    {/* divider */}
                    <div className="divider"></div>
                    <li><NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to="/apartment">
                        <FaCarTunnel></FaCarTunnel>
                        Apartment</NavLink></li>
                    
                </ul>
            </div>
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;