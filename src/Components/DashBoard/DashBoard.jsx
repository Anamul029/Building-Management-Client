import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaCarTunnel, FaNoteSticky } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import UseRoll from "../Hooks/UseRoll";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
    // const isAdmin=false;
    const [role] = UseRoll();
    console.log(role)

    const sidebarLink = ({ isActive }) =>
        `sidebar-nav-link ${isActive ? 'sidebar-nav-link-active' : 'sidebar-nav-link-inactive'}`;

    const SidebarShell = ({ children }) => (
        <div className="flex flex-col md:flex-row min-h-screen bg-base-200">
            <Helmet>
                <title>Building Management || dashboard</title>
            </Helmet>
            <aside className="md:w-64 md:min-h-screen bg-base-100 border-r border-base-300/50 shadow-sm">
                <div className="p-5 border-b border-base-300/50">
                    <h2 className="font-bold text-lg text-primary">Dashboard</h2>
                    <p className="text-xs text-base-content/50 mt-0.5 capitalize">{role} panel</p>
                </div>
                <ul className="menu p-3 gap-1">
                    {children}
                    <div className="divider my-2 text-xs text-base-content/40">Navigation</div>
                    <li><NavLink to="/" className={sidebarLink}>
                        <FaHome></FaHome>
                        Home</NavLink></li>
                    <li><NavLink to="/apartment" className={sidebarLink}>
                        <FaCarTunnel></FaCarTunnel>
                        Apartment</NavLink></li>
                </ul>
            </aside>
            <div className="flex-1 p-4 md:p-6 lg:p-8 animate-fade-in">
                <Outlet></Outlet>
            </div>
        </div>
    );

    if (role === 'admin') {
        return (
            <SidebarShell>
                <>
                    <li><NavLink to="/dashboard/userProfile" className={sidebarLink}>
                        <FaHome></FaHome>
                        Admin Profile</NavLink></li>
                    <li><NavLink to="/dashboard/managemember" className={sidebarLink}>
                        <FaUtensils></FaUtensils>
                        Manage Member</NavLink></li>
                    <li><NavLink to="/dashboard/anouchment" className={sidebarLink}>
                        <FaList></FaList>
                        Make Anouchment</NavLink></li>
                    <li><NavLink to="/dashboard/agriment" className={sidebarLink}>
                        <FaBook></FaBook>
                        Agreement Request</NavLink></li>
                    <li><NavLink to="/dashboard/coupon" className={sidebarLink}>
                        <FaUsers></FaUsers>
                        Manage Coupons</NavLink></li>
                </>
            </SidebarShell>
        );
    }
    else if (role === 'guest') {
        return (
            <SidebarShell>
                <>
                    <li><NavLink to="/dashboard/userProfile" className={sidebarLink}>
                        <FaHome></FaHome>
                        User Profile</NavLink></li>
                    <li><NavLink to="/dashboard/userAnnouncment" className={sidebarLink}>
                        <FaNoteSticky></FaNoteSticky>
                        Announcement</NavLink></li>
                </>
            </SidebarShell>
        );
    }
    else {
        return (
            <div>
                <SidebarShell>
                    <>
                        <li><NavLink to="/dashboard/userProfile" className={sidebarLink}>
                            <FaHome></FaHome>
                            My Profile</NavLink></li>
                        <li><NavLink to="/dashboard/payment" className={sidebarLink}>
                            <FaHome></FaHome>
                            Make Payment</NavLink></li>
                        <li><NavLink to="/dashboard/paymentHistory" className={sidebarLink}>
                            <FaHome></FaHome>
                            Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/userAnnouncment" className={sidebarLink}>
                            <FaNoteSticky></FaNoteSticky>
                            Announcement</NavLink></li>
                    </>
                </SidebarShell>
            </div>
        )
    }
};

export default DashBoard;