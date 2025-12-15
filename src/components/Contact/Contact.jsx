import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y1vlrls",
        "template_06g2iby",
        form.current,
        "VKXvu2O_oUsRA2Liq"
      )
      .then(() => {
        form.current.reset();
        setShowThankYou(true);

        setTimeout(() => {
          setShowThankYou(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <div id="contact" className="contact-container">
      {showThankYou && (
        <div className="thankyou-overlay">
          <h1>Thank You 🙏</h1>
          <p>Your message has been sent successfully</p>
          <span>Going back...</span>
        </div>
      )}

      {!showThankYou && (
        <div className="contact-card">
          <h2 className="contact-title">Contact Us</h2>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
