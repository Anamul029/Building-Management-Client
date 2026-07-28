import { useContext, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const RoomCard = ({ room }) => {
    const { user } = useContext(AuthContext)
    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure();
    axiosSecure.get('/booking')
    .then(res=>{
        // console.log(res.data)
        setBooks(res.data)
    })
    const UserAddRoom=books.filter(book=>book.email===user?.email)
    // console.log(UserAddRoom.length)
     

    const { apartmentImage, _id, apartmentNo, blockName, floorNo, rent } = room
    // const axiosSecure=UseAxiosSecure()
    const handleAddInfo = () => {
        if (UserAddRoom.length>0) {
            Swal.fire({
                icon: "error",
                title: "You have already select one room...",
                text: "You cannot select more than one room!",
              });
            return;
        }
        if (user && user?.email) {
            const roomInfo = {
                userName: user.displayName,
                email: user.email,
                floorNo,
                blockName,
                apartmentNo,
                rent,
                status: 'pending'
            }
            // data push to database
            axiosSecure.post('/booking', roomInfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Room added to the database`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }

        else {
            Swal.fire({
                title: "You are not logged In",
                text: "please login to the add to the room!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes,Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }
    return (
        <div className="card bg-base-100 shadow-card border border-base-300/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
            <figure className="overflow-hidden"><img className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" src="https://i.ibb.co/0sXp5hC/15.jpg" alt="Apartment room" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title text-lg font-bold">Room {apartmentNo}</h2>
                <div className="space-y-1.5 text-sm text-base-content/70">
                    <p><span className="font-medium text-base-content">Block:</span> {blockName}</p>
                    <p><span className="font-medium text-base-content">Floor:</span> {floorNo}</p>
                    <p><span className="font-medium text-base-content">Rent:</span> <span className="text-primary font-bold">{rent}</span></p>
                </div>
                <div className="card-actions justify-end mt-3">
                    <button onClick={handleAddInfo} className="btn btn-primary btn-sm">Agreement</button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;