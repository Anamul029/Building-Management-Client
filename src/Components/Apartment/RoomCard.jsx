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
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full" src="https://i.ibb.co/0sXp5hC/15.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Room Number:{apartmentNo}</h2>
                <h2>Block Name:{blockName}</h2>
                <h2>Floor No:{floorNo}</h2>
                <h2>Rent:{rent}</h2>
                <div className="card-actions justify-end">
                    <button onClick={handleAddInfo} className="btn btn-primary">Agreement</button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;