// // Contact.jsx
// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import "./Contact.css";

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_y1vlrls", // Replace with your EmailJS service ID
//         "template_06g2iby", // Replace with your EmailJS template ID
//         form.current,
//         "VKXvu2O_oUsRA2Liq" // Replace with your EmailJS public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setStatus("Message sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.log(error.text);
//           setStatus("Failed to send message. Try again later.");
//         }
//       );
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-card">
//         <h2 className="contact-title">Contact Us</h2>
//         <form ref={form} className="contact-form" onSubmit={sendEmail}>
//           <input
//             type="text"
//             name="name" // This matches {{name}} in your template
//             placeholder="Your Name"
//             className="contact-input"
//             required
//           />
//           <input
//             type="email"
//             name="email" // This matches {{email}} in your template
//             placeholder="Your Email"
//             className="contact-input"
//             required
//           />
//           <textarea
//             name="message" // This matches {{message}} in your template
//             placeholder="Your Message"
//             rows="5"
//             className="contact-textarea"
//             required
//           ></textarea>
//           <button type="submit" className="contact-button">
//             Send Message
//           </button>
//         </form>
//         {status && <p className="contact-status">{status}</p>}
//       </div>
//     </div>
//   );
// };

// export default Contact;




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
    <div className="contact-container">
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
