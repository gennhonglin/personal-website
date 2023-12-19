import "./About.scss";
import { motion } from "framer-motion";


function About() {

    const text = "Hey! I'm Genn-Hong Lin and I'm a Junior Full Stack Web Developer based in Vancouver, B.C";


    const charVariants = {
        initial: (index) => ({
          rotate: Math.random() * 360,
          x: Math.random() * 320,
          y: Math.random() * 150,
          fontSize: "1px"
        }), 
        
        animate: {
            rotate: 0,
            x: 0,
            y: 150,
            transition: { delay: 1, duration: 1.5 },
            fontSize: "16.75px"
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
                <div>
                    
                </div>
            </div>
            <div>
                
            </div>
        </section>
    );
}

export default About;