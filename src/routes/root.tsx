import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/footer";
import Header from "../pages/header/header";

export default function Root() {
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
