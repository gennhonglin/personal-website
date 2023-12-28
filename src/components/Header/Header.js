import "./Header.scss";
import logo from "../../assets/logo/GHL-Logo.png";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


function Header({ handleLinkClick }) {
    const [hamburger, setHamburger] = useState(false);
    const [menuClick, setMenuClick] = useState(false);
    const controls = useAnimation();

    const updateMenu = () => {
        if(!menuClick) {
            setHamburger(true);
            setMenuClick(true);
        } else {
            setHamburger(false);
            setMenuClick(false);
        }
    }

    useEffect(() => {

        function handleScroll() {
          const scrollY = window.scrollY;
          if (scrollY > 0) {
                controls.start({ y: 0, transition: { type: 'tween', duration: 0.7 } });
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const links = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
          },
          closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    }


    return(
        <motion.header className="header"
        initial={{ y: -100 }}
        animate={controls}
        >
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
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href="#" onClick={(e) => handleLinkClick('about', e)}>About</a></li>
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href="#" onClick={(e) => handleLinkClick('project', e)}>Project</a></li>
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href="#" onClick={(e) => handleLinkClick('contact', e)}>Contact</a></li>
                            <li className="header__nav__right__tablet-nav__list__item"><a className="header__nav__right__tablet-nav__list__item-link" href="Resume.pdf" target="_blank">Resume</a></li>
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
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href="#" className="header__nav__container__menu__list-link" onClick={(e) => handleLinkClick('about', e)}>About</a></motion.li>
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href="#" className="header__nav__container__menu__list-link" onClick={(e) => handleLinkClick('project', e)}>Projects</a></motion.li>
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href="#" className="header__nav__container__menu__list-link" onClick={(e) => handleLinkClick('contact', e)}>Contact</a></motion.li>
                            <motion.li className="header__nav__container__menu__list" variants={links}><a href="Resume.pdf" rel="noopener noreferrer" target="_blank" className="header__nav__container__menu__list-link">Resume</a></motion.li>
                        </motion.ul>
                </motion.div>
            </nav>
        </motion.header>
    )
}

export default Header;