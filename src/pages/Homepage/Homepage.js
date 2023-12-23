import "./Homepage.scss";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function Homepage() {
    return(
        <section className="homepage">
            <Header></Header>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    )
}

export default Homepage;