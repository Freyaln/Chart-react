import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

const Layout = () => {

    return (
        <header>
            <NavBar />
            <Outlet />

        </header>
    )
}

export default Layout;