import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";


const SocialLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||"/"
    // const useAxiosPublic=UseAxiosPublic()

    const handleGoogleSignIn=()=>{
        googleLogin()
        .then(res=>{
            console.log(res.user)
            navigate(from,{replace:true})

        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="mx-auto">
            <button onClick={handleGoogleSignIn} className="btn bg-blue-300">
                 <FaGoogle></FaGoogle>Google Login
            </button>
        </div>
    );
};

export default SocialLogin;