import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1); // back to previous page
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thankyou-page">
      <h1>Thank You! 🙏</h1>
      <p>Your message has been sent successfully.</p>
      <p>Redirecting back in 3 seconds...</p>
    </div>
  );
};

export default ThankYou;
