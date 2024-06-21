import { useEffect, useState } from "react";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { FaTrash } from "react-icons/fa";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const ManageCoupon = () => {
    const [coupons, setCoupons] = useState([])
    const axiosPublic = UseAxiosPublic()
    const axiosSecure = UseAxiosSecure();
    useEffect(() => {
        axiosPublic.get('/coupons')
            .then(res => {
                // console.log(res.data)
                setCoupons(res.data)
            })
    }, [axiosPublic])

    // delete coupon by admin
    const handleCouponDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/coupons/${id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Coupon has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    // coupon post
    const handleCouponPost=e=>{
        e.preventDefault();
        const code=e.target.code.value;
        const discount=e.target.discount.value;
        const description=e.target.description.value;
        const result={
            code:code,
            discountPercentage:discount,
            description:description
        }
        // console.log(result)
        axiosSecure.post('/coupons',result)
        .then(res=>{
            // console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully Coupon added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div className="bg-blue-50 min-h-screen">
            <h3 className="text-2xl font-semibold text-center mb-12">Manage all Coupons</h3>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coupons.map((coupon, index) => <tr key={coupon._id}>
                                    <th>{index + 1}</th>
                                    <td>{coupon.code}</td>
                                    <td>{coupon.discountPercentage}</td>
                                    <td>{coupon.description}</td>
                                    <td><button onClick={() => handleCouponDelete(coupon._id)} className="text-xl text-red-700"><FaTrash></FaTrash></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center mt-12">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn bg-green-600" onClick={() => document.getElementById('my_modal_3').showModal()}>Add Coupon</button>
                <dialog id="my_modal_3" className="modal w-auto h-96">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form onSubmit={handleCouponPost} className="grid grid-cols-1 gap-3">
                            <input type="text" placeholder="Coupon Code" name="code" required className="input input-bordered input-accent w-full max-w-xs" />
                            <input type="text" placeholder="Discount Percentage" name="discount" required className="input input-bordered input-accent w-full max-w-xs" />
                            <input type="text" placeholder="Description" name="description" required className="input input-bordered input-accent w-full max-w-xs" />
                            <button className="btn w-1/4 btn-primary">post coupon</button>
                        </form>
                        {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ManageCoupon;