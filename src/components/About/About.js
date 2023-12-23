import "./About.scss";
import { motion } from "framer-motion";
import Profile from "../../assets/images/profile-picture.jpg";
import tag from "../../assets/icons/code-slash-outline.svg";
import biography from "../../assets/icons/reader-outline.svg";
import console from "../../assets/icons/terminal-outline.svg";
import server from "../../assets/icons/server-outline.svg";
import other from "../../assets/icons/other.svg";
import soccer from "../../assets/icons/football-outline.svg";
import snowboard from "../../assets/icons/snowboard.svg";
import anime from "../../assets/icons/anime.svg";
import board from "../../assets/icons/board-games.svg";
import dog from "../../assets/icons/dog.svg";
import football from "../../assets/icons/soccer.svg";
import gaming from "../../assets/icons/gaming.svg";
import gym from "../../assets/icons/gym.svg";
import volleyball from "../../assets/icons/volleyball-net.svg";


function About() {

    const text = "Hey! I'm Genn-Hong Lin and I'm a Junior Full Stack Web Developer based in Vancouver, B.C";


    const charVariants = {
        initial: (index) => ({
          rotate: Math.random() * 360,
          x: Math.random() * 320,
          y: Math.random() * 380,
          fontSize: "1px"
        }), 
        
        animate: {
            rotate: 0,
            x: 0,
            y: 300,
            transition: { delay: 1, duration: 2 },
            fontSize: "23px"
        }
    };

    const textWithNbsp = text.replace(/ /g, '\u00A0');


    return(
        <section className="about">
            {/* Shooting star introduction section */}
            <motion.div className="about__hero">
                <div className="about__hero__scatter">
                    {textWithNbsp.split('').map((char, index, array) => (
                        <motion.span
                        className="about__hero__scatter-char"
                        key={index}
                        custom={index}
                        variants={charVariants}
                        initial="initial"
                        animate="animate"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
            <div className="about__details" id="about">
                <h2 className="about__details-title">ABOUT ME</h2>
                <div className="about__details__image-container">
                    <img alt="profile" src={Profile} className="about__details__image-container-img"></img>
                </div>
                <div className="about__details__description__container">
                    <h3 className="about__details__description__container-title">Who am I in a nutshell?</h3>

                    <p className="about__details__description__container-intro">
                     My coding journey ignited during my third year at Capilano University, where I initially pursued sciences.
                     In my quest for an elective, a friend suggested Computer Science 101, and little did I know, that moment would be the spark for my passion in coding, problem-solving, and witnessing the tangible results of my efforts.
                        <br/>
                        <br/>
                     I pursued an Associate in Computer Science Degree at Langara College.
                     Despite facing setbacks, I regained my momentum when I stumbled upon the BrainStation Bootcamp.
                     Now equipped with a Diploma in Web Development/Software Engineering, I'm on the lookout for independent projects or full-time positions.
                        <br/>
                        <br/>
                     During the day, you'll find me immersed in passion projects.
                     Whether it's developing a board game tracking website for my friends or a volleyball website to assist newcomers in enhancing their skills, I'm always looking to create something exciting.
                     When I'm not deep in coding or designing, you can catch me practicing or competing in volleyball leagues. When volleyball isn't on the agenda, you'll likely find me in front of my computer,
                     either gaming with friends, indulging in some anime, or spending time with my dogs.  
                    </p>
                </div>
            </div>
            
            <div className="about__skillset">
                <div className="about__skillset__stack">
                    <header className="about__skillset__stack__top">
                        <img alt="console" src={tag} className="about__skillset__stack__top-icon"/>
                        <h2 className="about__skillset__stack__top-title">TECH STACKS</h2>
                    </header>
                    <div className="about__skillset__stack__bot">
                        {/* Front-End Development */}
                        <div className="about__skillset__stack__bot__front-end">
                            <div className="about__skillset__stack__bot__front-end__top">
                                <img alt="front-end" src={console} className="about__skillset__stack__bot__front-end__top-icon"/>
                                <h3 className="about__skillset__stack__bot__front-end__top-title">Front-End</h3>
                            </div>

                            <div className="about__skillset__stack__bot__front-end__bot">
                                <p className="about__skillset__stack__bot__front-end__bot-skills">HTML</p>
                                <p className="about__skillset__stack__bot__front-end__bot-skills">CSS</p>
                                <p className="about__skillset__stack__bot__front-end__bot-skills">Javascript</p>
                                <p className="about__skillset__stack__bot__front-end__bot-skills">React</p>
                                <p className="about__skillset__stack__bot__front-end__bot-skills">Document Object Model(DOM) APIs</p>
                            </div>
                        </div>
                        
                        {/* Back-End Development */}
                        <div className="about__skillset__stack__bot__back-end">
                            <div className="about__skillset__stack__bot__back-end__top">
                                <img alt="back-end" src={server} className="about__skillset__stack__bot__back-end__top-icon"/>
                                <h3 className="about__skillset__stack__bot__back-end__top-title">Back-End</h3>
                            </div>

                            <div className="about__skillset__stack__bot__back-end__bot">
                                <p className="about__skillset__stack__bot__back-end__bot-skills">C++</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">Java</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">PHP</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">Shell</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">Perl</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">JSON</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">Node.js</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">Express</p>
                                <p className="about__skillset__stack__bot__back-end__bot-skills">MySQL</p>
                            </div>
                        </div>


                        {/* Others */}
                        <div className="about__skillset__stack__bot__others">
                            <div className="about__skillset__stack__bot__others__top">
                                <img alt="others" src={other} className="about__skillset__stack__bot__others__top-icon"/>
                                <h3 className="about__skillset__stack__bot__others__top-title">Other</h3>
                            </div>

                            <div className="about__skillset__stack__bot__others__bot">
                                <p className="about__skillset__stack__bot__others__bot-skills">Agile Development</p>
                                <p className="about__skillset__stack__bot__others__bot-skills">Web API’s</p>
                                <p className="about__skillset__stack__bot__others__bot-skills">User Authentication</p>
                                <p className="about__skillset__stack__bot__others__bot-skills">0Auth</p>
                                <p className="about__skillset__stack__bot__others__bot-skills">Heroku</p>
                                <p className="about__skillset__stack__bot__others__bot-skills">Github</p>
                                <p className="about__skillset__stack__bot__others__bot-skills">Jest</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="about__skillset__biography">
                    <header className="about__skillset__biography__top">
                        <img alt="biography" src={biography} className="about__skillset__biography__top-icon"/>
                        <h2 className="about__skillset__biography__top-title">BIOGRAPHY</h2>
                    </header>

                    <div className="about__skillset__biography__bot">
                        <div className="about__skillset__biography__bot__bio">
                            <h4 className="about__skillset__biography__bot__bio-year">1996</h4>
                            <p className="about__skillset__biography__bot__bio-detail">Born in Vancouver, Canada</p>
                        </div>
                        <div className="about__skillset__biography__bot__bio">
                            <h4 className="about__skillset__biography__bot__bio-year">2014</h4>
                            <p className="about__skillset__biography__bot__bio-detail">Attended Capilano University for Bachlor of Science</p>
                        </div>
                        <div className="about__skillset__biography__bot__bio">
                            <h4 className="about__skillset__biography__bot__bio-year">2016</h4>
                            <p className="about__skillset__biography__bot__bio-detail">Transferred from Capilano University to Langara College for Associate of Computer Science Degree</p>
                        </div>
                        <div className="about__skillset__biography__bot__bio">
                            <h4 className="about__skillset__biography__bot__bio-year">2022</h4>
                            <p className="about__skillset__biography__bot__bio-detail">Left Langara College to attend Brainstation Web Development Bootcamp</p>
                        </div>
                        <div className="about__skillset__biography__bot__bio">
                            <h4 className="about__skillset__biography__bot__bio-year">2022</h4>
                            <p className="about__skillset__biography__bot__bio-detail">Graduated from Brainstation Bootcamp with a Diploma in Web Development</p>
                        </div>
                        <div className="about__skillset__biography__bot__bio">
                            <h4 className="about__skillset__biography__bot__bio-year">Present</h4>
                            <p className="about__skillset__biography__bot__bio-detail">Currently looking for work opportunities</p>
                        </div>
                    </div>
                </div>

                <div className="about__skillset__hobbies">
                    <header className="about__skillset__hobbies__top">
                        <img alt="soccer" src={soccer} className="about__skillset__hobbies__top-icon"/>
                        <h2 className="about__skillset__hobbies__top-title">HOBBIES</h2>
                    </header>
                    <div className="about__skillset__hobbies__bot">
                        <div className="about__skillset__hobbies__bot__left">
                            <div className="about__skillset__hobbies__bot__left__hobby">
                                <img alt="snowboarding" className="about__skillset__hobbies__bot__left__hobby-icon" src={snowboard}/>
                                <p className="about__skillset__hobbies__bot__left__hobby-description">Snowboarding</p>
                            </div>
                            <div className="about__skillset__hobbies__bot__left__hobby">
                                <img alt="anime" className="about__skillset__hobbies__bot__left__hobby-icon" src={anime}/>
                                <p className="about__skillset__hobbies__bot__left__hobby-description">Anime</p>
                            </div>
                            <div className="about__skillset__hobbies__bot__left__hobby">
                                <img alt="gaming" className="about__skillset__hobbies__bot__left__hobby-icon" src={gaming}/>
                                <p className="about__skillset__hobbies__bot__left__hobby-description">Video Games</p>
                            </div>
                            <div className="about__skillset__hobbies__bot__left__hobby">
                                <img alt="board games" className="about__skillset__hobbies__bot__left__hobby-icon" src={board}/>
                                <p className="about__skillset__hobbies__bot__left__hobby-description">Board Games</p>
                            </div>
                        </div>

                        <div className="about__skillset__hobbies__bot__right">
                            <div className="about__skillset__hobbies__bot__right__hobby">
                                <img alt="dogs" className="about__skillset__hobbies__bot__right__hobby-icon" src={dog}/>
                                <p className="about__skillset__hobbies__bot__right__hobby-description">Playing with my two dogs</p>
                            </div>
                            <div className="about__skillset__hobbies__bot__right__hobby">
                                <img alt="gym" className="about__skillset__hobbies__bot__right__hobby-icon" src={gym}/>
                                <p className="about__skillset__hobbies__bot__right__hobby-description">Gym</p>
                            </div>
                            <div className="about__skillset__hobbies__bot__right__hobby">
                                <img alt="soccer ball" className="about__skillset__hobbies__bot__right__hobby-icon" src={football}/>
                                <p className="about__skillset__hobbies__bot__right__hobby-description">Wacthing/Playing Soccer/Football</p>
                            </div>
                            <div className="about__skillset__hobbies__bot__right__hobby">
                                <img alt="volleyball net" className="about__skillset__hobbies__bot__right__hobby-icon" src={volleyball}/>
                                <p className="about__skillset__hobbies__bot__right__hobby-description">Watching/Playing Volleyball</p>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </section>
    );
}

export default About;