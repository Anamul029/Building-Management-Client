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
            <h2>All Exciting Coupons:{coupons.length}</h2>
            <div>
                {
                    coupons.map(coupon => <div key={coupon._id} className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">Coupon Code:{coupon.code}</h2>
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