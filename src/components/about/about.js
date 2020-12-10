import React from "react";
import "./about_styles.css"
// About Me 

function About() {
    return (
        <section className="page-section-about bg-primary" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-center mt-0">About Me</h2>
                        <hr className="divider my-4" color="#408eff" />
                        <p className="text-muted mb-0"> Are you looking for a full stack developer with an ability to develop high-performance applications and technical innovations? Hello, I am Priya Mishra and I am currently pursuing Bachelors of Technology in Information Technology from KIET Group of Institutions, Ghaziabad. I have completed my schooling from CBSE Board, Gurgaon. I am highly passionate about building state-of-the-art, easy to use, user-friendly applications. </p>
                            
                    </div>
                </div>
            </div>
        </section>
  );
}

export default About;