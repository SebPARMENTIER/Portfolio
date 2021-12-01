// == Import npm
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import {
  Form,
  Row,
  Col,
} from 'react-bootstrap';

// == Import local
import './contact.scss';

// == Component
const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_00rzze1', 'template_ygvnq4o', event.target, 'user_KIqGbQLwhpWks7FD3tx7z')
      .then((result) => {
        console.log(result.text);
      }
      , (error) => {
        console.log(error.text);
      });
      event.target.reset();
      grecaptcha.reset();
      setVerified(false);
  };

  const [verified, setVerified] = useState(false);

  const handleOnChange = (value) => {
    setVerified(true);
  };

  return (
    <Form
      id="contact"
      noValidate validated={validated}
      onSubmit={handleSubmit, sendEmail}
      sm="auto"
      md="auto"
      lg="auto"
    >
      <div className="contact-banner">
        ME CONTACTER
      </div>
      <Row>
        <div className="name">
        <Form.Group
          as={Col}
          sm="auto"
          md="auto"
          lg="auto"
          controlId="validationLastName"
        >
          <Form.Label>Nom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Votre nom"
            name="lastname"
          />
          <Form.Control.Feedback>Nom OK</Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          sm="auto"
          md="auto"
          lg="auto"
          controlId="validationFirstName"
        >
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Votre prénom"
            name="firstname"
          />
          <Form.Control.Feedback>Prénom OK</Form.Control.Feedback>
        </Form.Group>
        </div>
        <div className="mail">
        <Form.Group
          as={Col}
          sm="auto"
          md="auto"
          lg="auto"
          controlId="validationEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Votre email"
            name="email"
          />
          <Form.Control.Feedback>Email OK</Form.Control.Feedback>
        </Form.Group>
        </div>
        <div className="message">
        <Form.Group
          as={Col}
          sm="auto"
          md="auto"
          lg="auto"
          controlId="validationMessage"
        >
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            type="text"
            placeholder="Votre message"
            name="message"
            style={{ height: '180px' }}
          />
          <Form.Control.Feedback>Message OK</Form.Control.Feedback>
        </Form.Group>
        </div>
        
      </Row>
      <ReCAPTCHA
        className="captcha"
        sitekey="6LcAv2cdAAAAACdWQeUNIow8VwbiJm2p_XJkNrnk"
        onChange={handleOnChange}
      />
      <button
        className="contact-button"
        disabled={!verified}
        type="submit"
      >
        Envoyer
      </button>
    </Form>
  )
};

// == Export
export default Contact;
