import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseRoll from "../Hooks/UseRoll";

const RoleRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    // const[isAdmin,isAdminLoading]=UseAdmin()
    const [isRole,isRoleLoading]=UseRoll()
    const location=useLocation()
    if(loading||isRoleLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user&&isRole){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default RoleRoute;