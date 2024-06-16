import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const MakeAnouchment = () => {
    const axiosSecure=UseAxiosSecure()
    const handleSubmit = (e) => {
        e.preventDefault();
        const description = e.target.description.value;
        const title=e.target.title.value;
        // Handle the form submission, e.g., send data to the server or update the state
        console.log('Announcement Submitted:', {title, description });
        axiosSecure.post('/annouchment',{title,description})
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully anouchment added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        })

    };

    return (
        <div>
            <h1 className="text-4xl font-semibold underline my-10"> Make Announcement</h1>
            <form onSubmit={handleSubmit}>
                <div className="my-4">
                    <label>Title:</label><br />
                    <input type="text" name="title" placeholder="add title here" required className="input input-bordered input-primary w-4/5 mx-auto " />
                </div>
                <div className="my-4">
                    <label>Description:</label> <br />
                    <textarea name="description" className="textarea w-4/5 mx-auto h-80 textarea-success" required placeholder="add description here"></textarea>
                </div>
                <button className="btn btn-primary">Add Annouchment</button>
            </form>
        </div>
    );
};

export default MakeAnouchment;
