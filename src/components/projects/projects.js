import React from "react";
import "./projects_styles.css"
// Projects

function Nav() {
    return (
      <section className="page-section bg-primary-portfolio" id="portfolio">
            <div className="row no-gutters">

                <div className="col-lg-4 col-sm-6">
                 <div className="card">
                    <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/hi.jpeg" alt="Weather Dashboard"/>
                        <h4 className="card-title">GRAB COINS</h4>
                        <p className="card-text p-y-1">AGame designed completely through HTML,CSS,javascript. In this game the user has to finish 5 levels and have to collect the coins in each level within 3 lives. There as multiple obstacles that user has to face and reach to end.</p>
                        <div className="twoButtons">
                          <a href="https://brittanymorrisdesign.github.io/Homework-6/" className="btn btn-outline-primary btn-sm"
                            id="viewPage" role="button">View Page</a>
                          <a href="https://github.com/brittanymorrisdesign/Homework-6" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">HTML, CSS, Bootstrap, Javascript, jQuery, Server-side APIs</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/hi.jpeg" alt="Weather Dashboard"/>
                        <h4 className="card-title">E commerce node js project
                      </h4>
                        <p className="card-text p-y-1">Project deals with a set of customer apis, product apis and accessing shopping carts and placing orders.Implemented-JWT authentication-Joi Validations Sequelize Winston Logging Sentry alert Caching.  </p>
                        <div className="twoButtons">
                          <a href="https://youtu.be/MXgsOZTp0eU"
                            className="btn btn-outline-primary btn-sm" id="viewPage" role="button">View Demo</a>
                          <a href="https://github.com/priyamishra2903/crud-jwt-sqlcon" className="btn btn-primary btn-sm"
                            id="githubRepo" role="button"><i className="fab fa-github"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, Javascript, npm modules</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="card">
                      <div className="card-block">
                        <img className="card-img-top" src="./assets/img/portfolio/thumbnails/hi.jpeg" alt="Weather Dashboard"/>
                        <h4 className="card-title">E-Learning Platform</h4>
                        <p className="card-text p-y-1">A full-stack application that allows users to sign up, log in, search for
                          recipes, and save their favorite recipes to the application.</p>
                        <div className="twoButtons">
                          <a href="https://recipe-track.herokuapp.com/" className="btn btn-outline-primary btn-sm" id="viewPage"
                            role="button">View Page</a>
                          <a href="https://github.com/priyamishra2903/crud-jwt-sqlcon" className="btn btn-primary btn-sm" id="githubRepo"
                            role="button"><i className="fab fa-github githubIcon"></i> Github Repo</a>
                        </div>
                        <div className="builtWith">Node.js, JavaScript, Handlebars.js, mySQL</div>
                      </div>
                    </div>
                  </div>

                  
                  
          
            </div>
          </section>
        );
}

export default Nav;