import { useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const AlAnnouchment = () => {
    const axiosSecure=UseAxiosSecure();
    const [annouch,setAnnouch]=useState([])
    useEffect(()=>{
        axiosSecure.get('/annouchment')
        .then(res=>{
            console.log(res.data)
            setAnnouch(res.data)
        })
    },[])
    
    return (
        <div>
            <h2 className="text-4xl font-sans font-semibold text-center my-8">Notice Board</h2>
            <div className="grid grid-cols-1 gap-6">
                {
                    annouch.map(annouc=><div key={annouc._id} className="card w-4/5 mx-auto bg-blue-50 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{annouc.title}</h2>
                      <p>{annouc.description}</p>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default AlAnnouchment;