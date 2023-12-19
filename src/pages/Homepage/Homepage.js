import "./Homepage.scss";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";

function Homepage() {
    return(
        <section className="homepage">
            <Header></Header>
            <About></About>
        </section>
    )
}

export default Homepage;