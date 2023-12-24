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
                    <div className="project__container__body__project">
                        <h3 className="project__container__body__project-title">Gloomhaven Tracker</h3>
                        <img alt="Gloomhaven Tracker Site" className="project__container__body__project-img" src={gloomhaven} />
                        <div className="project__container__body__project__details">
                            <div className="project__container__body__project__details__info">
                                <h4 className="project__container__body__project__details__info-year">2023</h4>
                                <h4 className="project__container__body__project__details__info-tech__stack">HTML, SCSS, ReactJS</h4>
                            </div>
                            <div className="project__container__body__project__details__container">
                                <p className="project__container__body__project__details__container-description">
                                    An app that keeps track of all the data in the board game gloomhaven without having to
                                    physically keep track of it.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="project__container__body__project">
                        <h3 className="project__container__body__project-title">GHLVolley</h3>
                        <img alt="GHLVolley Site" className="project__container__body__project-img" src={GHLVolley} />
                        <div className="project__container__body__project__details">
                            <div className="project__container__body__project__details__info">
                                <h4 className="project__container__body__project__details__info-year">2022</h4>
                                <h4 className="project__container__body__project__details__info-tech__stack">HTML, SCSS, ReactJS</h4>
                            </div>
                            <div className="project__container__body__project__details__container">
                                <p className="project__container__body__project__details__container-description">
                                    An app that was designed for newer volleyball players to find resources to improve their gameplay and to
                                    find local drop in's to play and practice at.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="project__container__body__hackathon">
                        <div className="project__container__body__hackathon__project">
                            <h3 className="project__container__body__hackathon__project-title">Pokemon Quiz</h3>
                            <img alt="Pokemon Quiz Site" className="project__container__body__hackathon__project-img" src={pokemon} />
                            <div className="project__container__body__hackathon__project__details">
                                <div className="project__container__body__hackathon__project__details__info">
                                    <h4 className="project__container__body__hackathon__project__details__info-year">2022</h4>
                                    <h4 className="project__container__body__hackathon__project__details__info-tech__stack">HTML, CSS, Javascript</h4>
                                </div>
                                <div className="project__container__body__hackathon__project__details__container">
                                    <p className="project__container__body__hackathon__project__details__container-description">
                                        An app that was developed during a mini hackthon that was assigned to us by Brainstation. This app was developed using
                                        a Pokemon API and fetching the data to develop a quiz with it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="project__container__body__hackathon__project">
                        <h3 className="project__container__body__hackathon__project-title">Fit Haven </h3>
                            <img alt="Google Hackathon Site" className="project__container__body__hackathon__project-img" src={Google} />
                            <div className="project__container__body__hackathon__project__details">
                                <div className="project__container__body__hackathon__project__details__info">
                                    <h4 className="project__container__body__hackathon__project__details__info-year">2022</h4>
                                    <h4 className="project__container__body__hackathon__project__details__info-tech__stack">HTML, SASS, ReactJS</h4>
                                </div>
                                <div className="project__container__body__hackathon__project__details__container">
                                    <p className="project__container__body__hackathon__project__details__container-description">
                                        A mobile fitness app that was developed in mind for the paraplegic during a hackathon that was assigned to us by Google Employees during our bootcamp. This app
                                        was developed by myself and my partner Marcelo. The UX/UI design of the app was designed by our lovely UX/UI designers Makenna and Pauline
                                        and the data gathered for the app was done by our fantastic Data Analyts Michael and Oyeronke. 
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