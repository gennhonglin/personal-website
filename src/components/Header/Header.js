import "./Header.scss";
import logo from "../../assets/logo/GHL-Logo.png";
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
                    <img src={logo} className="header__mobile-nav__left-logo"></img>
                    <h2 className="header__mobile-nav__left-title">Genn-Hong Lin</h2>
                </div>
                <div className="header__mobile-nav__right">
                    <button className={`header__mobile-nav__right__hamburger ${hamburger ? 'active': ''}`} onClick={()=> {updateMenu()}}>
                        <div className="header__mobile-nav__right__hamburger-bar"></div>
                    </button>
                </div>

                <div className={`header__mobile-nav__container ${hamburger ? 'active' : ''}`}>
                        <ul className="header__mobile-nav__container__menu">
                            <li className="header__mobile-nav__container__menu__list">About</li>
                            <li className="header__mobile-nav__container__menu__list">Project</li>
                            <li className="header__mobile-nav__container__menu__list">Contact</li>
                            <li className="header__mobile-nav__container__menu__list">Resume</li>
                        </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;