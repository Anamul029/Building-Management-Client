import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCarTunnel, FaNoteSticky } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseRoll from "../Hooks/UseRoll";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
    // const isAdmin=false;
    const [role] = UseRoll();
    console.log(role)
    if (role === 'admin') {
        return (
            <div className="flex flex-col md:flex-row">
                <Helmet>
                    <title>Building Management || dashboard</title>
                </Helmet>
                <div className="md:w-64 min-h-screen bg-blue-400">
                    <ul className="menu">
                        <>
                            <li><NavLink to="/dashboard/userProfile">
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
    }
    else if (role === 'guest') {
        return (
            <div className="flex flex-col md:flex-row">
                <Helmet>
                    <title>Building Management || dashboard</title>
                </Helmet>
                <div className="md:w-64 min-h-screen bg-blue-400">
                    <ul className="menu">
                        <>
                            <li><NavLink to="/dashboard/userProfile">
                                <FaHome></FaHome>
                                User Profile</NavLink></li>
                            <li><NavLink to="/dashboard/userAnnouncment">
                                <FaNoteSticky></FaNoteSticky>
                                Announcement</NavLink></li>

                        </>

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
    }
    else {
        return (
            <div>
                <Helmet>
                    <title>Building Management || dashboard</title>
                </Helmet>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 min-h-screen bg-blue-400">
                        <ul className="menu">
                            <>
                                <li><NavLink to="/dashboard/userProfile">
                                    <FaHome></FaHome>
                                    My Profile</NavLink></li>
                                <li><NavLink to="/dashboard/payment">
                                    <FaHome></FaHome>
                                    Make Payment</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory">
                                    <FaHome></FaHome>
                                    Payment History</NavLink></li>

                                <li><NavLink to="/dashboard/userAnnouncment">
                                    <FaNoteSticky></FaNoteSticky>
                                    Announcement</NavLink></li>

                            </>

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
            </div>
        )
    }
};

export default DashBoard;