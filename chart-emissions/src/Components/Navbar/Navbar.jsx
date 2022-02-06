import { Link, useHref, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import './NavBar.css';

const navBarItems = [
    {
        display: 'Home',
        icon: <i className="bx bx-home"></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Average by Country',
        icon: <i className="bx bx-world"></i>,
        to: '/Countries',
        section: 'countries'
    },
    {
        display: 'Statistics',
        icon: <i className="bx bx-bar-chart-alt-2"></i>,
        to: '/Statistics',
        section: 'statistics'
    },
]

const NavBar = () => {

    const [isActive, setIsActive] = useState(0);
    const [navbarMenuItemActive, setNavbarMenuItemActive] = useState(false)

    function activeStatus() {
        if (isActive === 0) {
            setIsActive(1);
            setNavbarMenuItemActive(false)
        }
        if (isActive === 1) {
            setIsActive(0);
            setNavbarMenuItemActive(true)
        }
    }

    console.log(isActive, navbarMenuItemActive)
    return (
        <nav className="navbar">
            <div className="navbar-menu">
                {
                    navBarItems.map((item, index) =>
                        <Link to={item.to} key={index} onClick={activeStatus} className={navbarMenuItemActive ? 'navbar-menu-item-active' : 'navbar-menu-item'}>
                            <div className="navbar-menu-item-icon">
                                {item.icon}
                            </div>
                            <div className="navbar-menu-item-text">
                                {item.display}
                            </div>
                        </Link>
                    )
                }
            </div>
        </nav >
    )
}

export default NavBar;