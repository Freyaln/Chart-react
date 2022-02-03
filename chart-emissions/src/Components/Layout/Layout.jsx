import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import Countries from "../Pages/Countries/Countries";

const Layout = () => {

    return (
        <header>
            <NavBar />
            <Outlet />

        </header>
    )
}

export default Layout;