import React from "react";
import "./services-styles.css"

// Services

function Services() {
    return (
<section className="page-section-services" id="services">
    <div className="container">
        <h2 className="text-center mt-0">Skills</h2>
        <hr className="divider my-4" />
        <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-01.png" alt="icons" className="responsive"/>
                    <h3 className="h4 mb-2">Front End Development

                    </h3>
                    <p className="text-muted mb-0">Developing data into a graphical interface through the use of HTML, CSS, and JavaScript.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-03.png" alt="icons" className="responsive"/>
                    <h3 className="h4 mb-2">Database</h3>
                    <p className="text-muted mb-0">Creating products that provide meaningful and relevant experiences to users. This involves integration of design & usability.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
                <div className="mt-5">
                    <img src="./assets/img/portfolio/thumbnails/icons-02.png" alt="icons" className="responsive"/>
                    <h3 className="h4 mb-2">Back End Development</h3>
                    <p className="text-muted mb-0">Developing server side applications and everything that communicates between the database and the browser.</p>
                </div>
            </div>
            </div>
        </div>
</section>
);
}

export default Services;