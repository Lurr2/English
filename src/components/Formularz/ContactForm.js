import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import classes from './ContactForm.module.scss';
function ContactForm() {
  const [state, handleSubmit] = useForm("xpznazgy");
  if (state.succeeded) {
      return <p>Dziękujemy za wiadomość! Wkrótce się skontaktujemy</p>;
  }
  return (
      <form className={classes.FormContainer} onSubmit={handleSubmit} method="POST" >
      
      <input 
        className={classes.Name}
        placeholder="Imię"
        id="Imię"
        type="Imię" 
        name="Imię"
      />
      <input
        placeholder="Nazwisko"
        id="Nazwisko"
        type="Nazwisko" 
        name="Nazwisko"
      />
      
      <input
        placeholder="Adres E-mail"
        id="email"
        type="email" 
        name="email"
      />
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
        Submit
      </button>
    </form>
  );
}
export default ContactForm;



// Kod dla szefowej
// xvoypzle const [state, handleSubmit] = useForm("xvoypzle");