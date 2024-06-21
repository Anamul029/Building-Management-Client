import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseRoll from "../Hooks/UseRoll";
import UseRooms from "../Hooks/UseRooms";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const UserProfile = () => {
    const [role] = UseRoll();
    const [rooms] = UseRooms()
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([])
    const axiosSecure = UseAxiosSecure();
    const [Member,setMember]=useState()
    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosSecure, users])
    const totalUsers = users.filter(user => user.role === 'guest');
    const totalMembers = users.filter(user => user.role === 'member');
    const availableRoom = ((rooms.length - totalMembers.length) / rooms.length) * 100;
    const agreementRoom = (totalMembers.length / rooms.length) * 100;
    // get room information for member
    useEffect(() => {
        axiosSecure.get(`/booking/${user?.email}`)
            .then(res => {
                setMember(res.data)
                console.log(res.data)
            })
    }, [axiosSecure, user])

    if (role === 'admin') {
        return (
            <div className=" p-5 bg-blue-50 min-h-screen text-center">
                <h2 className="text-4xl font-semibold mb-8 underline my-12">Member Profile Information</h2>
                <div>
                    <div className="avatar">
                        <div className="w-24 md:w-52  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className="" src={user.photoURL} />
                        </div>
                    </div>
                </div>
                <h3 className="md:text-3xl Md:font-semibold">Admin Email: {user.email}</h3>
                <h3 className="Md:text-3xl md:font-semibold">Admin Name: {user.displayName}</h3>
                <h3 className="Md:text-3xl md:font-semibold">Total Numbers of Rooms: {rooms.length}</h3>
                <h3 className="Md:text-3xl md:font-semibold">Percentage of Available Rooms: {availableRoom}%</h3>
                <h3 className="Md:text-3xl md:font-semibold">Percentage of Agreement Rooms: {agreementRoom}%</h3>
                <h3 className="Md:text-3xl md:font-semibold">Total Numbers of Users: {totalUsers.length}</h3>
                <h3 className="Md:text-3xl md:font-semibold">Total Numbers of Members: {totalMembers.length}</h3>

            </div>
        );
    }
    else if (role === 'guest') {
        return (
            <div className=" p-5 bg-blue-50 min-h-screen text-center">
                <h2 className="text-4xl font-semibold mb-8 underline my-12">My Profile Information</h2>
                <div>
                    <div className="avatar">
                        <div className="w-24 md:w-52  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className="" src={user.photoURL} />
                        </div>
                    </div>
                </div>
                <h3 className="md:text-3xl md:font-semibold">Email: {user.email}</h3>
                <h3 className="md:text-3xl md:font-semibold">Name: {user.displayName}</h3>
            
            </div>
        );
    }
    else {
        return (
            <div className=" p-5 bg-blue-50 min-h-screen text-center">
                <h2 className="text-4xl font-semibold mb-8 underline my-12">My Profile Information</h2>
                <div>
                    <div className="avatar">
                        <div className="w-24 md:w-52  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className="" src={user.photoURL} />
                        </div>
                    </div>
                </div>
                <h3 className="md:text-3xl md:font-semibold">Email: {user?.email}</h3>
                <h3 className="md:text-3xl md:font-semibold">Name: {user?.displayName}</h3>
                <h3 className="md:text-3xl md:font-semibold">Floor: {Member?.floorNo}</h3>
                <h3 className="md:text-3xl md:font-semibold">Block: {Member?.blockName}</h3>
                <h3 className="md:text-3xl md:font-semibold">Apartment No: {Member?.apartmentNo}</h3>
            </div>
        );
    }
};

export default UserProfile; 