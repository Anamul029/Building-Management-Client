import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className=" p-5 text-center my-12">
            <h2 className="text-4xl font-semibold mb-8 underline">User Profile Information</h2>
            <div>
                <div className="avatar">
                    <div className="w-24 md:w-52  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className="" src={user.photoURL} />
                    </div>
                </div>
            </div>
            <h3 className="md:text-3xl Md:font-semibold"> {user.email}</h3>
            <h3 className="Md:text-3xl md:font-semibold">{user.displayName}</h3>
        </div>
    );
};

export default UserProfile; 