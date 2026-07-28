import { Helmet } from "react-helmet-async";
import UseRooms from "../Hooks/UseRooms";
import RoomCard from "./RoomCard";

const Apartment = () => {
    const [rooms]=UseRooms()
    console.log(rooms)
    return (
        <div>
            <Helmet>
                <title>Building Management || apartment</title>
            </Helmet>
            <div className="mb-8">
                <h2 className="page-title">Available Apartments</h2>
                <p className="page-subtitle">Browse available units and request an agreement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map(room=><RoomCard room={room} key={room._id}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;