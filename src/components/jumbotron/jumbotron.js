import React from "react";
import "./jumbotron_styles.css"

// Masthead

function Jumbotron() {
    return (
<header className="masthead">
    <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
                <h1 className="text-white font-weight-medium"> Full Stack Developer</h1>
                <hr className="divider my-4" color="#408eff" />
            </div>
            <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">Welcome to page! Here are some samples of my work done.</p>
                <a href="#portfolio" id="portfolioBtn" className="btn btn-lg btn-outline-primarypx-4 js-scroll-trigger">View Resume</a>
            </div>
        </div>
    </div>
</header>

);
}

export default Jumbotron;