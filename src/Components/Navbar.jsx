import { useState } from 'react';
import "../style/Navbar.css"
import { CiMenuFries } from "react-icons/ci";
import { GiCrossMark } from "react-icons/gi";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <a href="#" className="logo">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRIA8ivo7pPWa_w7CtzXi8T7dL9G11q8qpA&usqp=CAU"
                    alt="User Logo"
                    className="user-logo"
                />
            </a>
            {
                !isMenuOpen ?
                    <CiMenuFries onClick={toggleMenu} className="menu-icon" />
                    : <GiCrossMark className="menu-icon" onClick={toggleMenu} />
            }

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <a href="#" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
