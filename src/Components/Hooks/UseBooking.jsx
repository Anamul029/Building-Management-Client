import { useContext } from "react";
import UseAxiosSecure from "./UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const UseBooking = () => {
   const axiosSecure=UseAxiosSecure();
   const{user}=useContext(AuthContext)
   const {refetch,data:booking=[]}=useQuery({
    queryKey:['booking',user?.email],
    queryFn:async()=>{
        const res=await axiosSecure.get(`/booking?${user?.email}`)
        return res.data;
    }
   })
   return [booking,refetch]
};

export default UseBooking;