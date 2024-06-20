import { useEffect, useState } from "react";
import UseAxiosPublic from "./UseAxiosPublic";

const UseRooms = () => {
    const [rooms,setRooms]=useState([])
    const [loading,setLoading]=useState(true)
    const axiosPublic=UseAxiosPublic()
    useEffect(()=>{
        // fetch('https://building-management-server-indol.vercel.app/rooms')
        axiosPublic.get('/rooms')
        // .then(res=>res.json())
        .then(data=>{
            console.log(data.data)
            setRooms(data.data);
            setLoading(false)
        })
    },[axiosPublic])
    return [rooms,loading]
   
};

export default UseRooms;