import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-4 flex-1">
                <NavBar></NavBar>
                <main className="mt-6 animate-fade-in">
                    <Outlet></Outlet>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;