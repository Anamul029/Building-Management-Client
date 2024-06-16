import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaTruck } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AgreementCard = ({ room }) => {
    console.log(room)
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    const { apartmentImage, rent, floorNo, blockName, apartmentNo, userName, email } = room;

    const handleRegect = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/booking/${id}`)
                    .then(res => {
                        console.log(res.data)
                    })
                Swal.fire({
                    title: "Rejected!",
                    text: "Agreement Request is cancelled.",
                    icon: "success"
                });
            }
        });

    }
    // make member with click accept button

    const handleMakeMember = (email) => {
        axiosSecure.patch(`/users/${email}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${email} is a member Now!!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="card w-auto h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/0sXp5hC/15.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2><span className="font-semibold text-white">User Name:</span>{userName}</h2>
                <h2><span className="font-semibold text-white">User Email:</span>{email}</h2>
                <h2><span className="font-semibold text-white">Floor No:</span>{floorNo}</h2>
                <h2><span className="font-semibold text-white">Block Name:</span>{blockName}</h2>
                <h2><span className="font-semibold text-white">Room No:</span>{apartmentNo}</h2>
                <p>If you return your book?please click the return button.</p>
                <div className="card-actions flex  justify-end">
                    <button onClick={() => handleMakeMember(email)} className="btn btn-primary bg-orange-600"><FaTruck></FaTruck> Accept</button>
                    <button onClick={() => handleRegect(room._id)} className="btn btn-primary bg-orange-600"><FaDeleteLeft></FaDeleteLeft> Regect</button>
                </div>
            </div>
        </div>
    );
};

export default AgreementCard;