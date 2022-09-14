import {useState} from "react";

import "./ContactForm.scss";

const ContactForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@") && enteredEmail.includes(".") && enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleNameInputChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleNameInputBlur = () => {
    setEnteredNameTouched(true);
  };

  const handleEmailInputChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleEmailInputBlur = () => {
    setEnteredEmailTouched(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? "invalid" : "valid";
  const emailInputClasses = emailInputIsInvalid ? "invalid" : "valid";

  return (
    <div className="contact">
      <h2 className="contact__heading">Get in touch</h2>
      <form onSubmit={handleFormSubmit}>
        <div className={nameInputClasses}>
          <label className="contact__name" htmlFor="name">
            Name:
          </label>
          <input
            // prettier-ignore
            type="text"
            id="name"
            onChange={handleNameInputChange}
            onBlur={handleNameInputBlur}
            value={enteredName}
          />
          {nameInputIsInvalid && <p className="contact__error">Name field must not be empty.</p>}
        </div>

        <div className={emailInputClasses}>
          <label className="contact__email" htmlFor="email">
            Email:
          </label>
          <input
            // prettier-ignore
            type="email"
            id="email"
            onChange={handleEmailInputChange}
            onBlur={handleEmailInputBlur}
            value={enteredEmail}
          />
          {emailInputIsInvalid && <p className="contact__error">Please enter a valid email.</p>}
        </div>

        <label message="message" className="contact__message">
          Message:
          <textarea name="" id="message"></textarea>
        </label>

        <button className="btn contact__btn" type="submit" disabled={!formIsValid}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
