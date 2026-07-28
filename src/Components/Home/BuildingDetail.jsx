

const BuildingDetail = () => {
    return (
        <div>
            <h2 className="section-heading mb-10">Details About the Building</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="content-card animate-slide-up">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-primary font-bold text-lg">1</span>
                    </div>
                    <h2 className="text-xl font-bold text-base-content mb-3">Architectural Marvel</h2>
                    <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Design and Structure</h5>
                    <p className="text-base-content/70 text-sm leading-relaxed mb-4"> The building is an epitome of modern architecture, seamlessly blending contemporary design with functional elegance. Its façade boasts a stunning combination of glass and steel, reflecting the dynamic spirit of urban life. The interior design features open spaces, minimalistic aesthetics, and high ceilings, creating a sense of grandeur and sophistication.
                    </p>
                    <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Height and Dimensions</h5>
                    <p className="text-base-content/70 text-sm leading-relaxed"> Standing tall at 250 meters, the building dominates the skyline with its imposing presence. It comprises 50 floors, each meticulously designed to maximize space and light. The floor-to-ceiling windows offer panoramic views of the city, enhancing the experience of both residents and office workers.
                    </p>
                </div>
                <div className="content-card animate-slide-up">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-primary font-bold text-lg">2</span>
                    </div>
                    <h2 className="text-xl font-bold text-base-content mb-3">Historical Significance</h2>
                    <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Inception and Inspiration</h5>
                    <p className="text-base-content/70 text-sm leading-relaxed mb-4"> Inspired by the iconic structures of the early 21st century, the building was conceptualized in 2010 and completed in 2015. It serves as a testament to the innovative spirit of its time, merging traditional elements with futuristic vision. The architects drew inspiration from renowned landmarks, incorporating elements that celebrate both heritage and progress.</p>
                    <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Cultural Impact</h5>
                    <p className="text-base-content/70 text-sm leading-relaxed">Over the years, the building has become a cultural landmark, symbolizing progress and modernity. It hosts a variety of events, from art exhibitions to corporate gatherings, enriching the community's cultural fabric. Its presence has influenced the architectural landscape of the area, setting a new standard for urban development.</p>
                </div>
                <div className="content-card animate-slide-up">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-primary font-bold text-lg">3</span>
                    </div>
                    <h2 className="text-xl font-bold text-base-content mb-3">Access and Connectivity</h2>
                    <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Prime Location</h5>
                    <p className="text-base-content/70 text-sm leading-relaxed mb-4"> Situated in the heart of the city, the building is easily accessible from major transport hubs. Its strategic location ensures convenience for both residents and visitors. Nearby, there are numerous dining, shopping, and entertainment options, making it a vibrant area to live and work.By following this structure.</p>
                    <h5 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Transportation Links</h5>
                    <p className="text-base-content/70 text-sm leading-relaxed">  Well-connected by public transport, the building is just a few minutes' walk from the nearest metro station and bus stops. It also offers ample parking space for those who prefer to drive. Bicycle racks and electric vehicle charging stations further enhance its accessibility and sustainability.By following this structure. </p>
                </div>
            </div>
        </div>
    );
};

export default BuildingDetail;