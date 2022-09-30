import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

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
