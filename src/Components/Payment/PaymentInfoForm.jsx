import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";

const PaymentInfoForm = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = UseAxiosPublic()
    const [roomUser, setRoomUser] = useState()
    useEffect(() => {
        axiosPublic.get(`https://building-management-server-indol.vercel.app/booking/${user.email}`)
            .then(res => {
                setRoomUser(res.data)
            })
    }, [])
    console.log(roomUser);
    return (
        <div className="bg-blue-50 min-h-screen">
            <form className="w-full md:w-3/5 p-10 container mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Member Email:</span>
                    </label>
                    <input type="text" name="name" placeholder="" disabled defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Member Floor:</span>
                    </label>
                    <input type="text" name="name" placeholder="" disabled defaultValue={roomUser?.floorNo} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Block Name:</span>
                    </label>
                    <input type="text" name="name" placeholder="" disabled defaultValue={roomUser?.blockName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Apartment No:</span>
                    </label>
                    <input type="text" name="name" placeholder="" disabled defaultValue={roomUser?.apartmentNo} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Rent:</span>
                    </label>
                    <input type="text" name="name" placeholder="" disabled defaultValue={roomUser?.rent} className="input input-bordered" required />
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-black">Payment Month</span>
                        </label>
                        <select className="h-12" name="subcategory">
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                    </div>
                    <h2 className="text-red-500">Please select the Payment month carefully!!</h2>

                {/* <Link to='makePayment'> */}
                    {/* <button className="btn  mt-3 flex justify-center items-center mx-auto"><Link to='/dashboard/makePayment'>Pay</Link></button> */}
                    {/* <button className="p-3 bg-blue-600" type="submit"><Link to='/dashboard/makePayment'>Pay</Link></button> */}
                    <Link to='/dashboard/makePayment'><button className="btn w-3/5 mt-3 btn-primary required:date">Pay</button></Link>
                {/* </Link> */}
            </form>

        </div>
    );
};

export default PaymentInfoForm;