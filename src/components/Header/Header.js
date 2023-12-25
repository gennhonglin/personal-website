import "./Header.scss";
import logo from "../../assets/logo/GHL-Logo.png";
import resume from "../../assets/resume/Resume.pdf";
import { useState } from "react";
import { motion } from "framer-motion";


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

    const links = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
          },
          closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    }


    return(
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav__left">
                    <img alt="logo" src={logo} className="header__nav__left-logo"></img>
                    <h2 className="header__nav__left-title">Genn-Hong Lin</h2>
                </div>
                <div className="header__nav__right">
                    <button className={`header__nav__right__hamburger ${hamburger ? 'active': ''}`} onClick={()=> {updateMenu()}}>
                        <div className="header__nav__right__hamburger-bar"></div>
                    </button>

                    <div className="header__nav__right__tablet-nav">
                        <ul className="header__nav__right__tablet-nav__list">
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href="#about">About</a></li>
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href="#project">Project</a></li>
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href="#contact">Contact</a></li>
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href={resume}>Resume</a></li>
                        </ul>
                    </div>

                </div>

                <motion.div className={`header__nav__container ${hamburger ? 'active' : ''}`}
                 initial={false}
                 animate={hamburger ? "open" : "closed"}

                 variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                >
                        <motion.ul className="header__nav__container__menu"
                            variants={{
                                open: {
                                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05
                                    }
                                },
                                closed: {
                                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                    }
                                }
                            }}
                        >
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href="#about" className="header__nav__container__menu__list-link">About</a></motion.li>
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href="#project" className="header__nav__container__menu__list-link">Projects</a></motion.li>
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href="#contact" className="header__nav__container__menu__list-link">Contact</a></motion.li>
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href={resume} className="header__nav__container__menu__list-link">Resume</a></motion.li>
                        </motion.ul>
                </motion.div>
            </nav>
        </header>
    )
}

export default Header;