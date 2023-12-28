import "./Projects.scss";
import gloomhaven from "../../assets/projects/Gloomhaven Mockup Two.png";
import GHLVolley from "../../assets/projects/GHLVolley Mockup.png";
import pokemon from "../../assets/projects/Pokemon-Quiz-Mockup.png";
import Google from "../../assets/projects/Google-Hackathon-Mockup.png";

function Projects() {
    return(
        <section className="project" id="project">
            <div className="project__container">
                <header className="project__container__header">
                    <h2 className="project__container__header-title">PROJECTS</h2>
                </header>
                <div className="project__container__body">
                    <div className="project__container__body__project gloomhaven">
                        <h3 className="project__container__body__project-title">Gloomhaven Tracker</h3>
                        <div className="project__container__body__project__image__container">
                           <img alt="Gloomhaven Tracker Site" className="project__container__body__project__image__container-img" src={gloomhaven} /> 
                        </div>
                        <div className="project__container__body__project__details">
                            <div className="project__container__body__project__details__info">
                                <h4 className="project__container__body__project__details__info-year">2023</h4>
                                <h4 className="project__container__body__project__details__info-tech__stack">HTML, SCSS, ReactJS</h4>
                            </div>
                            <div className="project__container__body__project__details__container">
                                <p className="project__container__body__project__details__container-description">
                                An innovative app designed to seamlessly manage all aspects of the Gloomhaven board game, 
                                eliminating the need for manual tracking by providing a digital solution for efficient data management.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="project__container__body__project ghlvolley">
                        <h3 className="project__container__body__project-title">GHLVolley</h3>
                        <div className="project__container__body__project__image__container">
                            <img alt="GHLVolley Site" className="project__container__body__project__image__container-img" src={GHLVolley} /> 
                        </div>
                        <div className="project__container__body__project__details">
                            <div className="project__container__body__project__details__info">
                                <h4 className="project__container__body__project__details__info-year">2022</h4>
                                <h4 className="project__container__body__project__details__info-tech__stack">HTML, SCSS, ReactJS</h4>
                            </div>
                            <div className="project__container__body__project__details__container">
                                <p className="project__container__body__project__details__container-description">
                                An app tailored for volleyball enthusiasts, providing a curated platform to enhance their gameplay through valuable resources
                                and discover local drop-in sessions for practice and play.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="project__container__body__hackathon">
                        <div className="project__container__body__hackathon__project pokemon">
                            <h3 className="project__container__body__hackathon__project-title">Pokemon Quiz</h3>
                            <div className="project__container__body__hackathon__project__image__container">
                                <img alt="Pokemon Quiz Site" className="project__container__body__hackathon__project__image__container-img" src={pokemon} />
                            </div>
                            <div className="project__container__body__hackathon__project__details">
                                <div className="project__container__body__hackathon__project__details__info">
                                    <h4 className="project__container__body__hackathon__project__details__info-year">2022</h4>
                                    <h4 className="project__container__body__hackathon__project__details__info-tech__stack">HTML, CSS, Javascript</h4>
                                </div>
                                <div className="project__container__body__hackathon__project__details__container">
                                    <p className="project__container__body__hackathon__project__details__container-description">
                                    Created during a mini-hackathon assigned by Brainstation,
                                    this app utilizes a Pokemon API, fetching data to craft an engaging quiz experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="project__container__body__hackathon__project fithaven">
                            <h3 className="project__container__body__hackathon__project-title">Fit Haven </h3>
                            <div className="project__container__body__hackathon__project__image__container">
                                <img alt="Google Hackathon Site" className="project__container__body__hackathon__project__image__container-img" src={Google} />
                            </div>
                            <div className="project__container__body__hackathon__project__details">
                                <div className="project__container__body__hackathon__project__details__info">
                                    <h4 className="project__container__body__hackathon__project__details__info-year">2022</h4>
                                    <h4 className="project__container__body__hackathon__project__details__info-tech__stack">HTML, SASS, ReactJS</h4>
                                </div>
                                <div className="project__container__body__hackathon__project__details__container">
                                    <p className="project__container__body__hackathon__project__details__container-description">
                                    My team and I created a mobile fitness app with a focus on accessibility for individuals with paraplegia during a hackathon organized by Google employees as part of our bootcamp.
                                    The development work was led by myself and my partner, Marcelo. The app's intuitive UX/UI design was crafted by our talented designers, Makenna and Pauline.
                                    Additionally, the valuable data needed for the app was meticulously gathered by our skilled data analysts, Michael and Oyeronke.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;