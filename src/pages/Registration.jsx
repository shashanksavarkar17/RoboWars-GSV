import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

const Registration = () => {
  const openZohoForm = () => {
    const url =
      "https://forms.zohopublic.in/operagxshashank17gm1/form/InternshipStudentInformationForm/formperma/nhMsMjM-26-9jmeUuaQVGJ4e13Ahz8OivB-uFgwY30Y";

    const width = 700;
    const height = 650;

    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      url,
      "ZohoForm",
      `width=${width},
       height=${height},
       left=${left},
       top=${top},
       toolbar=0,
       location=0,
       status=1,
       scrollbars=1,
       resizable=1`
    );
  };

  return (
    <>
      <Navbar />

      <div className="register-wrapper">
        <div className="register-card google-form-card">
          <span className="step-indicator">Team Registration</span>

          <h1 className="google-form-title">Official Team Registration Form</h1>

          <p className="google-form-desc">
            Please fill the form carefully. This is the{" "}
            <strong>only official way</strong> to register your team.
          </p>

          {/* ZOHO FORM TRIGGER */}
          <div className="google-form-container">
            <button className="zoho-open-btn" onClick={openZohoForm}>
              Access Registration Form
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
