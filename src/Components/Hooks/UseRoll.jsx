import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseRoll = () => {
    const { user, loading } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure();
    const { data: role, isLoading } = useQuery({
        queryKey: ['role',user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/users/${user.email}`)
            return data.role;
        },
    })
    return[role,isLoading]
};

export default UseRoll;