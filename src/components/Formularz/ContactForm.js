import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xpznazgy");
  if (state.succeeded) {
      return <p>Dziękujemy za wiadomość! Wkrótce się skontaktujemy</p>;
  }
  return (
      <form onSubmit={handleSubmit} method="POST" >
      <label htmlFor="name">
        Imię
      </label>
      <input
        id="name"
        type="name" 
        name="name"
      />
      <label htmlFor="surname">
        Nazwisko
      </label>
      <input
        id="surname"
        type="surname" 
        name="surname"
      />
      <label htmlFor="email">
        Adres E-mail
      </label>
      <input
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
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={'some'.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function ContactFormz() {
  return (
    <ContactForm />
  );
}
export default ContactFormz;



// Kod dla szefowej
// xvoypzle const [state, handleSubmit] = useForm("xvoypzle");