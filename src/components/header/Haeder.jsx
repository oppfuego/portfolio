import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.scss";
import { LuHouse, LuUserRound } from "react-icons/lu";
import { FaDev } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header id="home" className="header">
            <h1 className="header__logo">{`{ILLIA.dev}`}</h1>

            <button className="header__burger" onClick={toggleMenu}>
                {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>

            <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
                <Link to="home" smooth={true} duration={500} className="header__link">
                    <LuHouse className="icon" />
                    Home
                </Link><Link to="about" smooth={true} duration={500} className="header__link">
                    <LuUserRound className="icon" />
                    About me
                </Link>
                <Link to="projects" smooth={true} duration={500} className="header__link">
                    <FaDev className="icon" />
                    Projects
                </Link>
                <Link to="contacts" smooth={true} duration={500} className="header__link">
                    <FaPhoneAlt className="icon" />
                    Contacts
                </Link>
            </nav>
        </header>
    );
};

export default Header;