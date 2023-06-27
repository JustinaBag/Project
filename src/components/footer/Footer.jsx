import React from "react";
import "./footer.css";

const Footer = () => {
return (
<footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">JustinaBag</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>
            <li>
                <a href="#testimnials" className="footer__link">Testimonials</a>
            </li>
            <li>
                <a href="" className="footer__link"></a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/justina_bag/" className="footer__social-link" target="_blank"><i class="uil uil-facebook"></i></a>
    <a href="https://www.behance.net/" className="footer__social-link" target="_blank"><i class="uil uil-instagram"></i></a>
    <a href="https://lt.linkedin.com/" className="footer__social-link" target="_blank"><i class="uil uil-linkedin"></i></a>
    {/* <a href="https://github.com/JustinaBag" className="footer__social-link" target="_blank"><i class="uil uil-twitter"></i></a> */}
        </div>

        <span className="footer__copy">Lorem ipsum dolor sit amet.</span>
        
    </div>
</footer>
)
}

export default Footer