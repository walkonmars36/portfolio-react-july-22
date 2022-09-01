import React from "react";

import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">Get in touch</h2>
      <form action="mailto:mark@walkonmars.co.uk" method="get" enctype="text/plain">
        <label className="contact__name">
          Name:
          <input type="text" id="name" />
        </label>

        <label className="contact__email">
          Email:
          <input type="text" id="email" />
        </label>

        <label message="message" className="contact__message">
          Message:
          <textarea name="" id="message"></textarea>
        </label>

        <input className="btn contact__btn" type="submit" value="send" />
      </form>
    </section>
  );
};

export default ContactForm;