import React from 'react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import classes from './ContactForm.module.scss';
import PhoneInput from 'react-phone-number-input/input';

function ContactForm() {
  const [message, setMessage] = useState('');
  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');

    setMessage(result);
  };
  const [messageSur, setMessageSur] = useState('');
  const handleChangeSur = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');

    setMessageSur(result);
  };

  const [value, setValue] = useState();
  const [state, handleSubmit] = useForm("xvoypzle");
  if (state.succeeded) {
    return <p className={classes.Thanking}>Dziękujemy za wiadomość! Wkrótce się skontaktujemy!!!!</p>;
  }
  return (
    <form className={classes.FormContainer} onSubmit={handleSubmit} method="POST" >

      <input
        className={classes.Name}
        placeholder="Imię"
        id="Imię"
        type="text"
        name="Imię"
        value={message}
        onChange={handleChange}
      />
      <input
        placeholder="Nazwisko"
        id="Nazwisko"
        type="text"
        name="Nazwisko"
        value={messageSur}
        onChange={handleChangeSur}
      />

      <input
        placeholder="Adres E-mail"
        id="email"
        type="email"
        name="email"
      />
  
      <PhoneInput
      placeholder="Telefon"
        id="Telefon"
        type="Telefon"
        name="Telefon"
      country="PL"
      value={value}
      onChange={setValue} />

      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        className={classes.TextArea}
        placeholder="Wiadomość"
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={'some'.errors}
      />
      <button className={classes.btn_contact} type="submit" disabled={state.submitting}>
        Wyślij
      </button>
    </form>
  );
}
export default ContactForm;



// Kod dla szefowej
// xvoypzle const [state, handleSubmit] = useForm("xvoypzle");
// Fin