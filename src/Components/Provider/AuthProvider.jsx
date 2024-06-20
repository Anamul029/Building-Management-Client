import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null)
const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const axiosPublic=UseAxiosPublic();
    const [loading, setLoading] = useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // login
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    // update profile
      const UpdateProfile=(name,photo)=>{
           return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
           });
      }

    // save user
    const saveUser=async user =>{
       const currentuser={
            email:user?.email,
            role:'guest',
            status:'Verified'
        }
        const {data}=await axiosPublic.put('/users',currentuser)
        console.log(data,"data")
        return data;
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser)
            if(currentUser){
                saveUser(currentUser);
                const userInfo={email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    console.log(res.data.token)
                    localStorage.setItem('Access-token',res.data.token)
                    setLoading(false)
                })

            }
            else{
                localStorage.removeItem('Access-token');
                setLoading(false)
            }
            
        });
        return ()=>{
            return unSubscribe;
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        UpdateProfile,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;