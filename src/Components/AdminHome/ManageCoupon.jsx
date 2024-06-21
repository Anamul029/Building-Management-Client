import { useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const ManageCoupon = () => {
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
            <h3>Hello from Coupon section</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Serial No</th>
                                <th>Cupon Code</th>
                                <th>Discount %</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coupons.map((coupon,index)=><tr key={coupon._id}>
                                    <th>{index+1}</th>
                                    <td>{coupon.code}</td>
                                    <td>{coupon.discountPercentage}</td>
                                    <td>{coupon.description}</td>
                                </tr>)
                            }
                            
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCoupon;