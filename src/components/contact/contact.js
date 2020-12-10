import React from "react";
import "./contact-styles.css"
// Contact

function Contact() {
    return (
        <section className="page-section-contact" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="mt-0">Contact</h2>
                        <hr className="divider my-4" />
                    <p className="text-muted mb-5">Feel free to contact me for future opportunities or to just say hi!</p>
                    </div>
                </div>
                <div className="row">           
            <div className="col-lg-4 ml-auto text-center mb-3 mb-lg-0">
                <img src="./assets/img/portfolio/thumbnails/icons-08.png" alt="icons" className="responsive" href="https://github.com/priyamishra2903"/><br /> 
                <a href="https://github.com/priyamishra2903">Github</a>
            </div>
            <div className="col-lg-4 mr-auto text-center">
                <img src="./assets/img/portfolio/thumbnails/icons-04.png" alt="icons" className="responsive" />
                <a className="d-block" href="mailto:mishrapriya9999@gmail.com">mishrapriya9999@gmail.com</a>
            </div>
            <div className="col-lg-4 mr-auto text-center">
                <img src="./assets/img/portfolio/thumbnails/icons-07.png" href="https://www.linkedin.com/in/priya-mishra" alt="icons" className="responsive"/><br /> 
                <a href="https://www.linkedin.com/in/priya-mishra">LinkedIn</a>
            </div>
        </div>
    </div>
</section>

);
}

export default Contact;