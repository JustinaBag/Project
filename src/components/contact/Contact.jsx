import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4p04jqp', 'template_jc5gk1g', form.current, 'rJw1yfo8qa6SlDXgz')
    e.target.reset()
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  };

return (
<section className="contact section" id="contact">
<h2 className="section__title">Get in Touch</h2>
<span className="section__subtitle">Contact me</span>

<div className="contact__container container grid">
<div className="contact__content">
    <h3 className="contact__title">Talk to me</h3>

    <div className="contact__info">
        <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>

            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">justinabagurskiene@gmail.com</span>

            <a href="maito:justinabagurskiene@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            
        </div>

        <div className="contact__card">
            <i className="bx bxl-whatsapp contact__card-icon"></i>

            <h3 className="contact__card-title">Whatsapp</h3>
            <span className="contact__card-data">860578381</span>

            <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            
        </div>

        <div className="contact__card">
            <i className="bx bxl-messenger contact__card-icon"></i>

            <h3 className="contact__card-title">Messenger</h3>
            <span className="contact__card-data">860578381</span>

            <a href="" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            
        </div>
    </div>
</div>

<div className="contact__content">
    <h3 className="contact__title">Write me your project</h3>

    <form ref={form} onSubmit={sendEmail}>
        <div className="contact__form--div">
            <label className="contact__form-tag">Name</label>
            <input type="text" name="name" className="contact_form-input" placeholder="Insert you name:"/>
        </div>

        <div className="contact__form--div">
            <label className="contact__form-tag">Email</label>
            <input type="email" name="email" className="contact_form-input" placeholder="Insert you email:"/>
        </div>

        <div className="contact__form--div contact__form-area">
            <label className="contact__form-tag">Project</label>
            <textarea name="project" cols="30" rows="10" className="contact_form-input" placeholder="Write about your project:"></textarea>
        </div>

        <button className="button button--flex">
            Send Message
        </button>
        
    </form>
</div>
</div>
</section>
)
}

export default Contact