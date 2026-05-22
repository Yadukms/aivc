import React, { useState } from "react";
import "./ConnectWithUs.css";

const ConnectWithUs = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    revenue: "",
    hear: "",
    about: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      
      const response = await fetch("/send-email", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {

        alert("Email sent successfully!");

        setFormData({
          fullname: "",
          phone: "",
          email: "",
          revenue: "",
          hear: "",
          about: "",
        });

      } else {

        alert("Failed to send email");
      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <section className="connect-with-us" id="connect">

      <div className="cwu-container">

        {/* Handshake Image */}

        <div className="cwu-image-container">

          <img
            src="/connect-ezremove.png"
            alt="Partnership"
            className="cwu-handshake-image"
          />

        </div>

        {/* Form Card */}

        <div className="cwu-card">

          <div className="cwu-header">

            <h2 className="cwu-title">Connect With Us</h2>

            <p className="cwu-subtitle">
              No pitch. No obligation. Just a candid conversation about what's possible
            </p>

          </div>

          <form className="cwu-form" onSubmit={handleSubmit}>

            <div className="cwu-form-row">

              <div className="cwu-form-group">

                <label htmlFor="fullname">FULL NAME</label>

                <input
                  type="text"
                  id="fullname"
                  placeholder="ENTER YOUR NAME"
                  required
                  value={formData.fullname}
                  onChange={handleChange}
                />

              </div>

              <div className="cwu-form-group">

                <label htmlFor="phone">PHONE NUMBER</label>

                <input
                  type="text"
                  id="phone"
                  placeholder="XXX XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="cwu-form-row">

              <div className="cwu-form-group">

                <label htmlFor="email">EMAIL ADDRESS</label>

                <input
                  type="email"
                  id="email"
                  placeholder="XYZ@EXAMPLE.COM"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="cwu-form-row">

              <div className="cwu-form-group">

                <label htmlFor="revenue">ANNUAL REVENUE</label>

                <select
                  id="revenue"
                  required
                  value={formData.revenue}
                  onChange={handleChange}
                >

                  <option value="" disabled>
                    SELECT A RANGE
                  </option>

                  <option value="under-5m">Under $5M</option>

                  <option value="5m-10m">$5M - $10M</option>

                  <option value="10m-20m">$10M - $20M</option>

                  <option value="above-20m">Above $20M</option>

                </select>

              </div>

              <div className="cwu-form-group">

                <label htmlFor="hear">HOW DID YOU HEAR ABOUT US?</label>

                <select
                  id="hear"
                  required
                  value={formData.hear}
                  onChange={handleChange}
                >

                  <option value="" disabled>
                    HOW DID YOU HEAR ABOUT US?
                  </option>

                  <option value="search">Search Engine</option>

                  <option value="linkedin">LinkedIn</option>

                  <option value="referral">Referral</option>

                  <option value="other">Other</option>

                </select>

              </div>

            </div>

            <div className="cwu-form-row">

              <div className="cwu-form-group">

                <label htmlFor="about">ABOUT YOU</label>

                <input
                  type="text"
                  id="about"
                  placeholder="TELL US ABOUT YOU"
                  value={formData.about}
                  onChange={handleChange}
                />

              </div>

            </div>

            <div className="cwu-checkbox-row">

              <input type="checkbox" id="agree" required />

              <label htmlFor="agree">
                I Agree To Receive Communications From AI Venture Catalyst Regarding My Inquiry And Understand That My Information Will Be Kept Confidential.
              </label>

            </div>

            <button type="submit" className="cwu-submit-btn">
              Submit
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ConnectWithUs;