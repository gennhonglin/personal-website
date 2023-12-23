import "./Header.scss";
import logo from "../../assets/logo/GHL-Logo.png";
import resume from "../../assets/resume/Resume.pdf";
import { useState } from "react";


function Header() {
    const [hamburger, setHamburger] = useState(false);
    const [menuClick, setMenuClick] = useState(false);

    const updateMenu = () => {
        if(!menuClick) {
            setHamburger(true);
            setMenuClick(true);
        } else {
            setHamburger(false);
            setMenuClick(false);
        }
    }


    return(
        <header className="header">
            <nav className="header__mobile-nav">
                <div className="header__mobile-nav__left">
                    <img alt="logo" src={logo} className="header__mobile-nav__left-logo"></img>
                    <h2 className="header__mobile-nav__left-title">Genn-Hong Lin</h2>
                </div>
                <div className="header__mobile-nav__right">
                    <button className={`header__mobile-nav__right__hamburger ${hamburger ? 'active': ''}`} onClick={()=> {updateMenu()}}>
                        <div className="header__mobile-nav__right__hamburger-bar"></div>
                    </button>
                </div>

                <div className={`header__mobile-nav__container ${hamburger ? 'active' : ''}`}>
                        <ul className="header__mobile-nav__container__menu">
                            <li className="header__mobile-nav__container__menu__list"><a href="#about" className="header__mobile-nav__container__menu__list-link">About</a></li>
                            <li className="header__mobile-nav__container__menu__list"><a href="#project" className="header__mobile-nav__container__menu__list-link">Projects</a></li>
                            <li className="header__mobile-nav__container__menu__list"><a href="#contact" className="header__mobile-nav__container__menu__list-link">Contact</a></li>
                            <li className="header__mobile-nav__container__menu__list"><a href={resume}  className="header__mobile-nav__container__menu__list-link">Resume</a></li>
                        </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;