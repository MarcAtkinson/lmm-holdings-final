
"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="formGrid">
        <label>Name<input required name="name" /></label>
        <label>Company<input name="company" /></label>
        <label>Email<input required type="email" name="email" /></label>
        <label>Mobile<input required name="mobile" /></label>
      </div>
      <label>Area of interest
        <select name="interest">
          <option>Strategic partnership</option>
          <option>Infrastructure / plant hire</option>
          <option>Property</option>
          <option>Business investment</option>
        </select>
      </label>
      <label>Tell us about the opportunity<textarea required name="message" rows={6} /></label>
      <button type="submit">Start the Conversation</button>
      {sent && <p className="success">Thank you. This prototype has captured your enquiry locally for demonstration purposes.</p>}
    </form>
  );
}
