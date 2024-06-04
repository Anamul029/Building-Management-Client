import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Location = () => {
    return (
        <div>
            <h3 className="text-4xl font-semibold text-center my-12">🗺️ Location and Directions</h3>
            <div className="flex flex-col md:flex-row justify-between bg-base-200">
                <div className="flex-1 p-4">
                    <h1 className='font-semibold text-2xl my-3'>1. Apartment Location</h1>
                    <div>
                        <span className='text-xl'>Address:</span>
                        <p>Green Tower Apartments, 10th Floor, Plot 6, Mohakhali C/A, Dhaka 1212, Bangladesh <br />

                            Green Tower Apartments is ideally located in the bustling commercial and residential hub of Mohakhali in Dhaka. The area is known for its vibrant atmosphere, convenient amenities, and excellent connectivity.</p>
                    </div>
                    <div className='mt-2'>
                        <span className='text-xl'>Nearby Landmarks:</span>
                        <p>
                            <li>Mohakhali Bus Terminal: 0.5 km </li>
                            <li>Gulshan 1: 2 km</li>
                            <li> Banani Lake: 1.5 km</li>
                            </p>
                    </div>
                    <h1 className='font-semibold text-2xl mt-1'>2. Getting Here</h1>
                    <div className='mt-2'>
                        <span className='text-xl'>By public transportion:</span>
                        <p>
                            <p><span className='font-semibold'>Bus:</span>Numerous bus routes serve the Mohakhali Bus Terminal, which is just a short walk from the apartment complex.</p>
                            <p><span className='font-semibold'>Riksha:</span>rickshaws are readily available throughout the area for short trips.</p>
                            <p><span className='font-semibold'>Metro:</span>The upcoming Dhaka Metro Rail project includes a station in Mohakhali, making future travel even more convenient.</p>
                         
                            </p>
                    </div>

                </div>
                <div className="flex-1">
                    <MapContainer center={[23.777176, 90.399452]} zoom={13} style={{ height: "500px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[23.777176, 90.399452]}>
                            <Popup>
                                Our Apartment Location
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Location;