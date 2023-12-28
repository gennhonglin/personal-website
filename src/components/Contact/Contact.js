import "./Contact.scss";
import linked from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, useAnimation} from "framer-motion";



function Contact({sectionRef}) {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const titleControls = useAnimation();
    const descriptionControls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

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


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j0ldupz', 'template_p8payad', form.current, 'gc-9izpvf1qU4uEGl')
        .then((result) => {
            setSent(true);
        }, (error) => {
            console.log(error.text);
        });

        setSent(true);

        form.current.reset();
    }

    return(
        <section className="contact" id="contact" ref={sectionRef}>
            <header className="contact__header">
                <motion.h2 className="contact__header-title"
                 initial={{ y: 100, opacity: 0 }}
                 animate={titleControls}
                 transition={{ duration: 0.6 }}
                >
                CONTACT ME
                </motion.h2>
            </header>

            <div className="contact__form-container">
                <form className="contact__form-container__form" ref={form} onSubmit={sendEmail}>
                    <motion.h3 className="contact__form-container__form-title"
                      initial={{ x: -100, opacity: 0 }}
                      animate={descriptionControls}
                      transition={{ duration: 0.6 }}
                    >
                        Need a Developer? Message me about your ideas!
                    </motion.h3>
                    
                    <motion.p className="contact__form-container__form-details"
                     initial={{ x: -100, opacity: 0 }}
                     animate={descriptionControls}
                     transition={{ duration: 0.6 }}
                    >
                    I am actively seeking opportunities as a Junior Front-End or Full Stack Web Developer. 
                    Additionally, I am open to taking on new projects. 
                    Feel free to reach out if you have any exciting opportunities or if you're looking for a dedicated developer for your projects!
                    </motion.p>

                    {/* Name */}

                    <div className="contact__form-container__form__data">
                        <div className="contact__form-container__form__data__input-container">
                            <input className="contact__form-container__form__data__input-container-input" type="text" name="to_name" required></input>
                            <label className="contact__form-container__form__data__input-container-label">Your name</label>
                        </div>
                        {/* Email */}
                        <div className="contact__form-container__form__data__input-container">
                            <input className="contact__form-container__form__data__input-container-input" type="email" name="from_name" required></input>
                            <label className="contact__form-container__form__data__input-container-label">Your Email</label>
                        </div>
                    </div>
                    {/* Message */}
                    <div className="contact__form-container__form__input-message">
                        <textarea className="contact__form-container__form__input-message-input" type="text" name="message" required></textarea>
                        <label className="contact__form-container__form__input-message-label">Your message</label>
                    </div>

                    {sent ? <button className="contact__form-container__form__submit" type="submit">Sent!</button> : <button className="contact__form-container__form__submit" type="submit">Send</button>}
                </form>

                <div className="contact__form-container__details">
                    <div className="contact__form-container__details__email">
                        <h3 className="contact__form-container__details__email-title">Contact Information</h3>
                        <a className="contact__form-container__details__email-email" href="mailto: gennhonglin@gmail.com">gennhonglin@gmail.com</a>
                    </div>

                    <div className="contact__form-container__details__web">
                        <h3 className="contact__form-container__details__web-title">On the Web</h3>
                        <div className="contact__form-container__details__web__links">
                            <a className="contact__form-container__details__web__links__ref" href="https://www.linkedin.com/in/gennhong-lin/">
                                <img alt="linkedin-icon" className="contact__form-container__details__web__links__ref-img" src={linked}/>
                                <span className="contact__form-container__details__web__links__ref-website">LinkedIn</span>
                            </a>

                            <a className="contact__form-container__details__web__links__ref" href="https://github.com/gennhonglin">
                                <img alt="github-icon" className="contact__form-container__details__web__links__ref-img" src={github}/>
                                <span className="contact__form-container__details__web__links__ref-website">Github</span>
                            </a>

                            <a className="contact__form-container__details__web__links__ref" href="https://www.tiktok.com/@ghlvolley">
                                <img alt="tiktok-icon" className="contact__form-container__details__web__links__ref-img" src={tiktok}/>
                                <span className="contact__form-container__details__web__links__ref-website">Tiktok</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;