import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaTruck } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const AgreementCard = ({room}) => {
    const {user}=useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const {apartmentImage,rent,floorNo,blockName,apartmentNo}=room;

    const handleRegect=(id)=>{
        axiosSecure.delete(`/rooms/${id}`)
        .then(res=>{
            console.log(res.data)
        })

    }
    return (
        <div className="card w-auto h-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.ibb.co/0sXp5hC/15.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2><span className="font-semibold text-white">User Name:</span>{user.displayName}</h2>
                <h2><span className="font-semibold text-white">User Email:</span>{user.email}</h2>
                <h2><span className="font-semibold text-white">Floor No:</span>{floorNo}</h2>
                <h2><span className="font-semibold text-white">Block Name:</span>{blockName}</h2>
                <h2><span className="font-semibold text-white">Room No:</span>{apartmentNo}</h2>
                <p>If you return your book?please click the return button.</p>
                <div className="card-actions flex  justify-end">
                    <button className="btn btn-primary bg-orange-600"><FaTruck></FaTruck> Accept</button>
                    <button onClick={()=>handleRegect(room._id)} className="btn btn-primary bg-orange-600"><FaDeleteLeft></FaDeleteLeft> Regect</button>
                </div>
            </div>
        </div>
    );
};

export default AgreementCard;