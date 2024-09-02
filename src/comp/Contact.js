import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add logic for sending data to the server
    console.log("Form submitted:", formData);
    // Clearing the form after submitting
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-form">
            <h2>#Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="contact-box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-box">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
