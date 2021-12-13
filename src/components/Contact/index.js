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
import Loading from 'src/components/Loading';

// == Component
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [mailSent, setMailSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_00rzze1', 'template_ygvnq4o', event.target, 'user_KIqGbQLwhpWks7FD3tx7z')
    .then((result) => {
      console.log(result.text);
      if (result.text === 'OK') {
        setIsLoading(false);
        setMailSent(true);
      };
    }
    , (error) => {
      console.log(error.text);
    });
    event.target.reset();
    grecaptcha.reset();
    setVerified(false);
    setValidated(false);
  };
  
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setIsLoading(true);
    if (form.checkValidity() === true) {
      event.preventDefault();
      setValidated(true);
      sendEmail(event);
    } else if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      setIsLoading(false);
    };
  };

  const [verified, setVerified] = useState(false);

  const handleOnChange = () => {
    setVerified(true);
    setMailSent(false);
  };

  return (
    <Form
      id="contact"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      sm="auto"
      md="auto"
      lg="auto"
    >
      <div className="contact-banner">
        ME CONTACTER
      </div>
      <div className="contact-intro">
        Vous pouvez me contacter en remplissant le formulaire ci-dessous. Je vous répondrai dans les meilleurs délais.
      </div>
      <Row>
        <div className="lastname">
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
            <Form.Control.Feedback type="invalid">Veuillez saisir votre nom.</Form.Control.Feedback>
          </Form.Group>
         </div>
         <div className="firstname">
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
          <Form.Control.Feedback type="invalid">Veuillez saisir votre prénom.</Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">Veuillez saisir un email valide.</Form.Control.Feedback>
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
          <Form.Control.Feedback type="invalid">Veuillez saisir votre message.</Form.Control.Feedback>
        </Form.Group>
        </div>
        
      </Row>
      <ReCAPTCHA
        className={isLoading ? "no-captcha" : "captcha"}
        sitekey="6LcAv2cdAAAAACdWQeUNIow8VwbiJm2p_XJkNrnk"
        onChange={handleOnChange}
      />
      {isLoading && (<Loading />)}
      <div className={mailSent ? "mail-sent" : "mail-no-sent"}>
        Votre message a bien été envoyé.
      </div>
      <div className="contact-button-position">
        <button
          className="contact-button"
          disabled={!verified}
          type="submit"
        >
          Envoyer
        </button>
      </div>
    </Form>
  )
};

// == Export
export default Contact;
