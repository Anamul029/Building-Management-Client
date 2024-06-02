import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Main = () => {
    return (
        <div className="w-4/5 container mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;