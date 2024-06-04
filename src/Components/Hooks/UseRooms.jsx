import { useEffect, useState } from "react";

const UseRooms = () => {
    const [rooms,setRooms]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/rooms')
        .then(res=>res.json())
        .then(data=>{
            setRooms(data);
            setLoading(false)
        })
    },[])
    return [rooms,loading]
   
};

export default UseRooms;