import "./About.scss";
import { motion, useAnimation } from "framer-motion";
import Profile from "../../assets/images/profile-picture.jpg";
import tag from "../../assets/icons/code-slash-outline.svg";
import terminal from "../../assets/icons/terminal-outline.svg";
import server from "../../assets/icons/server-outline.svg";
import other from "../../assets/icons/other.svg";
import { useEffect, useState } from "react";



function About({sectionRef}) {
    const [animationComplete, setAnimationComplete] = useState(false);
    const text = "Hey! I'm Genn-Hong Lin and I'm a Junior Full Stack Web Developer based in Vancouver, B.C.";
    const [initialX, setInitialX] = useState(300);
    const [initialY, setInitialY] = useState(300);
    const [finalY, setFinalY] = useState(400);
    const [font, setFont] = useState('23px');
    const [animationKey, setAnimationKey] = useState(0);
    const titleControls = useAnimation();
    const descriptionControls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);
    

    const handleResize = () => {
        const newScreenWidth = window.innerWidth;

        // Adjust initial x, y, and font size based on screen width
        if (newScreenWidth < 768) {
            setInitialX(newScreenWidth);
            setInitialY(250);
            setFont('1.4375rem');
            setFinalY(300);
        } else if (newScreenWidth >= 768 && newScreenWidth < 1280) {
            setInitialX(800);
            setInitialY(200);
            setFont('2.25rem');
            setFinalY(300);
        } else if(newScreenWidth >= 1280){
            setInitialX(newScreenWidth);
            setInitialY(200);
            setFont('4rem');
            setFinalY(450);
        }

        setAnimationKey((prevKey) => prevKey + 1);

    };

    useEffect(() => {

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    useEffect(() => {
        const onScroll = () => {
            const element = sectionRef.current;
            if (element) {
                const elementTop = element.offsetTop + 200;
                const scrollPosition = window.scrollY + window.innerHeight;
                if (scrollPosition > elementTop && !isVisible) {
                    setIsVisible(true);
                    titleControls.start({ y: 0, opacity: 1 });
                    setTimeout(() => {
                        descriptionControls.start({ x: 0, opacity: 1 });
                    }, 1000);
                }
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };

    }, [titleControls, descriptionControls, isVisible])

    const charVariants = {
        initial: (index) => ({
            rotate: Math.random() * 360,
            x: Math.random() * initialX,
            y: Math.random() * initialY + 60,
            fontSize: '1px',
        }), 

        animate: {
            rotate: 0,
            x: 0,
            y: finalY,
            transition: { delay: 1, duration: 2 },
            fontSize: font, 
        }
    };

    const handleAnimationComplete = () => {
        setAnimationComplete(true);
    };

    const textWithNbsp = text.replace(/ /g, '\u00A0');


    return(
        <section className="about">
            {/* Shooting star introduction section */}
            <motion.div key={animationKey} className="about__hero">
                <div className="about__hero__scatter">
                    {textWithNbsp.split('').map((char, index, array) => (
                        <motion.span
                        className={`about__hero__scatter-char ${animationComplete ? `hide` : ``}`}
                        key={index}
                        custom={index}
                        variants={charVariants}
                        initial="initial"
                        animate="animate"
                        onAnimationComplete={() => handleAnimationComplete()}
                        >
                            {char}
                        </motion.span>
                    ))}

                    <p className={`about__hero__scatter-title ${animationComplete ? `display` : ``}`}>{text}</p>
                </div>
            </motion.div>
            <div className="about__details" id="about" ref={sectionRef}>
                <motion.h2 className="about__details-title"
                initial={{ y: 100, opacity: 0 }}
                animate={titleControls}
                transition={{ duration: 0.6 }}
                >
                    ABOUT ME
                </motion.h2>

                <div className="about__details__bot">
                    <div className="about__details__bot__image-container">
                        <img alt="profile" src={Profile} className="about__details__bot__image-container-img"></img>
                    </div>
                    <motion.div className="about__details__bot__description__container" 
                      initial={{ x: -200, opacity: 0 }}
                      animate={descriptionControls}
                      transition={{ duration: 0.6 }}
                    >
                        <h3 className="about__details__bot__description__container-title">Who am I in a nutshell?</h3>

                        <p className="about__details__bot__description__container-intro">
                        My coding journey ignited during my third year at Capilano University, where I initially pursued sciences.
                        In my quest for an elective, a friend suggested Computer Science 101, and little did I know, that moment would be the spark for my passion in coding, problem-solving, and witnessing the tangible results of my efforts.
                            <br/>
                            <br/>
                        I pursued an Associate in Computer Science Degree at Langara College.
                        Over the years of immersing myself in the field of Computer Science, I discovered that my greatest progress came from hands-on experience rather than theoretical learning alone.
                        This realization prompted me to make a proactive choice, leading me to pursue a specialized Bootcamp to elevate and refine my skills.
                        Now equipped with a Diploma in Web Development/Software Engineering, I'm on the lookout for independent projects or full-time positions.
                            <br/>
                            <br/>
                        During the day, you'll find me immersed in passion projects.
                        Whether it's developing a board game tracking website for my friends or a volleyball website to assist newcomers in enhancing their skills, I'm always looking to create something exciting.
                        When I'm not deep in coding or designing, you can catch me practicing or competing in volleyball leagues. When volleyball isn't on the agenda, you'll likely find me in front of my computer,
                        either gaming with friends, indulging in some anime, or spending time with my dogs.  
                        </p>
                    </motion.div>
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
                                <img alt="front-end" src={terminal} className="about__skillset__stack__bot__front-end__top-icon"/>
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
            </div>
        </section>
    );
}

export default About;