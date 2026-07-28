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
            <h2 className="section-heading mb-10">Exciting Discount Coupons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    coupons.map(coupon => <div key={coupon._id} className="content-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative">
                            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                                {coupon.code}
                            </div>
                            <p className="text-base-content/70 text-sm leading-relaxed mb-4">{coupon.description}</p>
                            <div className="flex items-end justify-between">
                                <span className="text-xs text-base-content/50 uppercase tracking-wide">Discount</span>
                                <span className="text-3xl font-bold text-primary">{coupon.discountPercentage}%<span className="text-sm font-medium text-base-content/50 ml-1">off</span></span>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Coupon;