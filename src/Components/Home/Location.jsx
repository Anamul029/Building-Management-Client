import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Location = () => {
    return (
        <div>
            <h3 className="section-heading mb-10">Location and Directions</h3>
            <div className="content-card overflow-hidden p-0">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 p-6 md:p-8 space-y-6">
                        <div>
                            <h4 className='font-bold text-lg text-base-content mb-3 flex items-center gap-2'>
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                                Apartment Location
                            </h4>
                            <div className="pl-10 space-y-3">
                                <div>
                                    <span className='text-sm font-semibold text-primary uppercase tracking-wide'>Address</span>
                                    <p className="text-base-content/70 text-sm leading-relaxed mt-1">Green Tower Apartments, 10th Floor, Plot 6, Mohakhali C/A, Dhaka 1212, Bangladesh</p>
                                    <p className="text-base-content/60 text-sm mt-2">Green Tower Apartments is ideally located in the bustling commercial and residential hub of Mohakhali in Dhaka. The area is known for its vibrant atmosphere, convenient amenities, and excellent connectivity.</p>
                                </div>
                                <div>
                                    <span className='text-sm font-semibold text-primary uppercase tracking-wide'>Nearby Landmarks</span>
                                    <ul className="mt-2 space-y-1.5 text-sm text-base-content/70">
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Mohakhali Bus Terminal: 0.5 km</li>
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Gulshan 1: 2 km</li>
                                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Banani Lake: 1.5 km</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold text-lg text-base-content mb-3 flex items-center gap-2'>
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                                Getting Here
                            </h4>
                            <div className="pl-10 space-y-2 text-sm text-base-content/70">
                                <p><span className='font-semibold text-base-content'>Bus:</span> Numerous bus routes serve the Mohakhali Bus Terminal, which is just a short walk from the apartment complex.</p>
                                <p><span className='font-semibold text-base-content'>Riksha:</span> Rickshaws are readily available throughout the area for short trips.</p>
                                <p><span className='font-semibold text-base-content'>Metro:</span> The upcoming Dhaka Metro Rail project includes a station in Mohakhali, making future travel even more convenient.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-h-[350px] lg:min-h-[500px]">
                        <MapContainer center={[23.777176, 90.399452]} zoom={13} style={{ height: "100%", width: "100%", minHeight: "350px" }}>
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
        </div>
    );
};

export default Location;