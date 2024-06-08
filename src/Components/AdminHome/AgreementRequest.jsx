import UseRooms from "../Hooks/UseRooms";
import AgreementCard from "./AgreementCard";

const AgreementRequest = () => {
    const [rooms] = UseRooms()
    // console.log(rooms)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map(room=><AgreementCard room={room} key={room._id}></AgreementCard>)
                }
        </div>
    );
};

export default AgreementRequest;