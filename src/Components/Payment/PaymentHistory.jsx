import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const PaymentHistory = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = useContext(AuthContext);
    const [histories, setHistory] = useState([])
    useEffect(() => {
        axiosSecure.get('/payments')
            .then(res => {
                // console.log(res.data)
                setHistory(res.data)
            })
    }, [axiosSecure])
    const myHistory = histories.filter(history => history.email === user?.email)
    console.log(myHistory)
    return (
        <div className="bg-blue-50 min-h-screen">
            <h2 className="md:text-4xl font-semibold bg-blue-100 p-4 text-center">..............All Payment History...............</h2>
            <div>
                <div className="overflow-x-auto mt-12">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="font-semibold text-xl">
                                <th>Date</th>
                                <th>Email</th>
                                <th>Rent</th>
                                <th>Transection Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myHistory.map((data)=><tr key={data._id}>
                                    <th>{data.date}</th>
                                    <td>{data.email}</td>
                                    <td>{data.price}</td>
                                    <td>{data.transectionId}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default PaymentHistory;