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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    rooms.map(room=><RoomCard room={room} key={room._id}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;