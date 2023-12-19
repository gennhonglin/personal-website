import "./About.scss";
import { motion } from "framer-motion";
import Profile from "../../assets/images/profile-picture.jpg";


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
            transition: { delay: 1, duration: 1.5 },
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
            <div className="about__details">
                <h2 className="about__details-title">ABOUT ME</h2>
                <div className="about__details__image-container">
                    <img alt="profile" src={Profile} className="about__details__image-container-img"></img>
                </div>
                <div className="about__details__description__container">
                    <h3 className="about__details__description__container-title">Who am I in a nutshell?</h3>

                    <p className="about__details__description__container-descrip">
                    I am an independent  Junior Full Stack Web Developer proudly based in the vibrant city of Vancouver, B.C.
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
                      When I'm not deep in coding or designing, you can catch me practicing or competing in volleyball leagues. When volleyball isn't on the agenda, you'll likely find me in front of my computer, either gaming with friends or indulging in some anime.
                        
                    </p>
                </div>
            </div>
            <div>
                
            </div>
        </section>
    );
}

export default About;