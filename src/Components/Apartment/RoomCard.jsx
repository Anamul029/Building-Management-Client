
const RoomCard = ({room}) => {
    console.log(room)
    const {apartmentImage,_id,apartmentNo,blockName,floorNo,rent}=room
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full" src="https://i.ibb.co/0sXp5hC/15.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Room Number:{apartmentNo}</h2>
                <h2>Block Name:{blockName}</h2>
                <h2>Floor No:{floorNo}</h2>
                <h2>Rent:{rent}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Agreement</button>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;