import { useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const Coupon = () => {
    const [coupons, setCoupons] = useState([])
    const axiosPublic = UseAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/coupons')
            .then(res => {
                console.log(res.data)
                setCoupons(res.data)
            })
    }, [axiosPublic])
    return (
        <div>
            <h2 className=" md:text-4xl font-semibold text-center my-12">All Exciting Discount Coupons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
                {
                    coupons.map(coupon => <div key={coupon._id} className="card bg-red-50 bg-gradient-to-r from-indigo-100  text-black ">
                        <div className="card-body">
                            <h2 className="md:card-title text-semibold ">Coupon Code:{coupon.code}</h2>
                            <p>{coupon.description}</p>
                            <div className="card-actions justify-end">
                                <h2 className="font-semibold text-xl">{coupon.discountPercentage}% off</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Coupon;