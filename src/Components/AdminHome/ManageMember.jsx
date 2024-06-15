import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageMember = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const totalMembers=users.filter(user=>user.role==='member')

    const handleDelete = user => {
        console.log(user._id)
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
            //    axiosSecure.patch(`/users/${user._id}`)
            //    .then(res=>{
            //     console.log(res.data)
            //    })
            }
        });
    }
    return (
        <div>
            <h3 className="test-6xl font-semibold text-center my-10">All users are Here</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                totalMembers.map((book, index) => <tr key={book._id} className="bg-base-200 my-3">
                                    <th>{index + 1}</th>
                                    <td>{book.userName}</td>
                                    <td>{book.email}</td>
                                    <button onClick={() => handleDelete(book)} className="btn btn-ghost btn-lg"><FaTrash className="text-red-600"></FaTrash></button>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageMember;