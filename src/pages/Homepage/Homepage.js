import "./Homepage.scss";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import { useRef } from "react";

function Homepage() {

    const sectionRef = {
        about: useRef(null),
        project: useRef(null),
        contact: useRef(null),
      };

    const handleLinkClick = (sectionId, event) => {
        event.preventDefault();

        const targetRef = sectionRef[sectionId];
        if (targetRef && targetRef.current) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      };

    return(
        <section className="homepage">
            <Header handleLinkClick={handleLinkClick}></Header>
            <About sectionRef={sectionRef.about}></About>
            <Projects sectionRef={sectionRef.project}></Projects>
            <Contact sectionRef={sectionRef.contact}></Contact>
            <Footer></Footer>
        </section>
    )
}

export default Homepage;