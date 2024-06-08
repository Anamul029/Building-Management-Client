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
    const useAxiosPublic=UseAxiosPublic()

    const handleGoogleSignIn=()=>{
        googleLogin()
        .then(res=>{
            console.log(res.user)
            const userInfo={
                name:res.user.displayName,
                email:res.user.email
            }
            useAxiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
            })

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