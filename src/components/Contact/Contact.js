import "./Contact.scss";
import linked from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";



function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j0ldupz', 'template_p8payad', form.current, 'gc-9izpvf1qU4uEGl')
        .then((result) => {
            console.log("Message sent!");
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <section className="contact" id="contact">
            <header className="contact__header">
                <h2 className="contact__header-title">CONTACT ME</h2>
            </header>

            <div className="contact__form-container">
                <form className="contact__form-container__form" ref={form} onSubmit={sendEmail}>
                    <h3 className="contact__form-container__form-title">Need a Developer? Message me about your ideas!</h3>
                    
                    <p className="contact__form-container__form-details">
                    I am actively seeking opportunities as a Junior Front-End or Full Stack Web Developer. 
                    Additionally, I am open to taking on new projects. 
                    Feel free to reach out if you have any exciting opportunities or if you're looking for a dedicated developer for your projects!
                    </p>



                    {/* Name */}
                    <div className="contact__form-container__form__input-container">
                        <input className="contact__form-container__form__input-container-input" type="text" name="to_name" required></input>
                        <label className="contact__form-container__form__input-container-label">Your name</label>
                    </div>
                    {/* Email */}
                    <div className="contact__form-container__form__input-container">
                        <input className="contact__form-container__form__input-container-input" type="email" name="from_name" required></input>
                        <label className="contact__form-container__form__input-container-label">Your Email</label>
                    </div>
                    {/* Message */}
                    <div className="contact__form-container__form__input-message">
                        <textarea className="contact__form-container__form__input-message-input" type="text" name="message" required></textarea>
                        <label className="contact__form-container__form__input-message-label">Your message</label>
                    </div>

                    <button className="contact__form-container__form__submit" type="submit">Send</button>
                </form>
            </div>

            <div className="contact__email">
                <h3 className="contact__email-title">Contact Information</h3>
                <a className="contact__email-email" href="mailto: gennhonglin@gmail.com">gennhonglin@gmail.com</a>
            </div>

            <div className="contact__web">
                <h3 className="contact__web-title">On the Web</h3>
                <div className="contact__web__links">
                    <a className="contact__web__links__ref" href="https://www.linkedin.com/in/gennhong-lin/">
                        <img alt="linkedin-icon" className="contact__web__links__ref-img" src={linked}/>
                        <span className="contact__web__links__ref-website">LinkedIn</span>
                    </a>

                    <a className="contact__web__links__ref" href="https://github.com/gennhonglin">
                        <img alt="github-icon" className="contact__web__links__ref-img" src={github}/>
                        <span className="contact__web__links__ref-website">Github</span>
                    </a>

                    <a className="contact__web__links__ref" href="https://www.tiktok.com/@ghlvolley">
                        <img alt="tiktok-icon" className="contact__web__links__ref-img" src={tiktok}/>
                        <span className="contact__web__links__ref-website">Tiktok</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;