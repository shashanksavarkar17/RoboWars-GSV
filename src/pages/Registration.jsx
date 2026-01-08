import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

const Registration = () => {
  return (
      <>
        <Navbar />

        <div className="register-wrapper">
          <div className="register-card google-form-card">
            <span className="step-indicator">Team Registration</span>

            <h1 className="google-form-title">
              Official Team Registration Form
            </h1>

            <p className="google-form-desc">
              Please fill the form carefully. This is the <strong>only official way</strong>
              to register your team.
            </p>

            {/* GOOGLE FORM EMBED */}
            <div className="google-form-container">
              <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScxyqhGSL8YL73D1EVWPV0nyCXy5NUDOg-hN5-L2EKegQ_KJQ/viewform?embedded=true"
                  width="700" height="700" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
              </iframe>

            </div>
          </div>
        </div>

        <Footer/>
      </>
  );
};

export default Registration;
