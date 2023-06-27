import React from "react";
import "./about.css";
import AboutImg from "../../assets/Justina_bag.png";
import Info from "./Info";

import CV1 from "../../assets/SVG/Asset 10.svg";
// import CV2 from "../../assets/SVG/Asset 8.svg";
// import CV3 from "../../assets/SVG/Asset 9.svg";

const About = () => {
return (
    <section className="about section" id="about">
       <h2 className="section__title">About Me</h2>
<span className="section__subtitle">My introduction</span>

<div className="about__container container grid">
    <img src={AboutImg} alt="" className="about__img"/>

    <div className="about__data">
    <Info />
<p className="about__description">
    Front-end developer. I create web pages with UI / UX user interface, I have years of experience and mane clints are happy with the projects carried out.
</p>

<a download="" href={CV1} className="button button--flex">Download CV
</a>
{/* <a download="" href={CV2} className="button button--flex">Download CV 2
</a>
<a download="" href={CV3} className="button button--flex">Download CV 3
</a> */}

</div>
</div>

    </section>
)
}

export default About