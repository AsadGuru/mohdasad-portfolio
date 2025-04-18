import React, { useState } from 'react'
import { RiBook2Line, RiMailLine, RiMap2Line, RiSendPlaneFill, RiUser3Line } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedbackMessage(alert('Fill all the fields'));
      setMessageColor('color-red');

      setTimeout(() => {
        setFeedbackMessage('');
      }, 3000);
      return;
    }

    emailjs
      .send('service_ny00q0l', 'template_00pfuxn', formData, 'lnGRqPSo2E-9mMspi')
      .then(
        () => {
          setFeedbackMessage(alert('Message Sent ✔'));
          setMessageColor('color-first');

          setTimeout(() =>
            setFeedbackMessage(''), 3000);

          setFormData({
            name: '',
            email: '',
            message: '',
            subject: '',
          });
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error);
        },
      );

  }

  return (
    <section className='contact section'>
      <u><h2 className="section-title">Coffee  ☕<span> With</span> Me</h2></u>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
              <RiMap2Line />
            </span>

            <div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-data">Nai Basti Bijnor, India</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiUser3Line />
            </span>

            <div>
              <h3 className="contact-title">Freelance</h3>
              <p className="contact-data">Immediately Available</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiMailLine />
            </span>

            <div>
              <h3 className="contact-title">Email</h3>
              <div className="contact-data">mohdasadnaseem.man786@gmail.com</div>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
              <RiBook2Line />
            </span>

            <div>
              <h3 className="contact-title">Phone</h3>
              <div className="contact-data">+91 9911093317</div>
            </div>
          </div>
        </div>

        <form action="" className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label htmlFor='' className="contact-form-label">
                Your Full Name <b>*</b>
              </label>

              <input
                type="text"
                name='name'
                onChange={handleChange}
                value={formData.name}
                className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label htmlFor='' className="contact-form-label">
                Your Email Address <b>*</b>
              </label>

              <input
                type="email"
                name='email'
                onChange={handleChange}
                value={formData.email}
                className="contact-form-input" />
            </div>
          </div>

          <div className="contact-form-div">
            <label htmlFor='' className="contact-form-label">
              Your Subject <b>*</b>
            </label>

            <input
              type="text"
              name='subject'
              onChange={handleChange}
              value={formData.subject}
              className="contact-form-input" />
          </div>

          <div className="contact-form-div">
            <label htmlFor='' className="contact-form-label">
              Your Message <b>*</b>
            </label>

            <textarea
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="contact-form-input contact-form-area"></textarea>
          </div>

          <div className="contact-button">
            <button className="button">
              Send Message
              <span className="button-icon"><RiSendPlaneFill /></span>
            </button>
          </div>

          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact;