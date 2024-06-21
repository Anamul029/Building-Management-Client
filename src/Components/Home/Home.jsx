import { Helmet } from "react-helmet-async";
import BuildingDetail from "./BuildingDetail";
import Location from "./Location";
import Slider from "./Slider";
import Coupon from "./Coupon";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Building Management || Home</title>
            </Helmet>
            <Slider></Slider>
            <BuildingDetail></BuildingDetail>
            <Location></Location>
            <Coupon></Coupon>
        </div>
    );
};

export default Home;