import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
// import UseRooms from "../Hooks/UseRooms";
import AgreementCard from "./AgreementCard";

const AgreementRequest = () => {
    // const [rooms] = UseRooms()
    const[rooms,setRooms]=useState([])
    const axiosSecure=UseAxiosSecure()
    useEffect(()=>{
        axiosSecure.get('/booking')
        .then(res=>{
            console.log(res.data)
            setRooms(res.data)
        })
    },[])
    console.log(rooms)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map(room=><AgreementCard room={room} key={room._id}></AgreementCard>)
                }
        </div>
    );
};

export default AgreementRequest;