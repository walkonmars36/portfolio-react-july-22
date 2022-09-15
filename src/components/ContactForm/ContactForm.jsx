import "./ContactForm.scss";
import useInput from "../../hooks/use-input";

const ContactForm = () => {
  // prettier-ignore
  const {value: enteredName,
    isValid: enteredNameIsValid,
     hasError: nameInputError, 
     handleValueChange: handleNameInputChange, 
     handleInputBlur: handleNameInputBlur,
     reset: resetNameInput
    } = useInput(value => value.trim() !== "");

  // prettier-ignore
  const {value: enteredEmail,
    isValid: enteredEmailIsValid,
     hasError: emailInputError, 
     handleValueChange: handleEmailInputChange, 
     handleInputBlur: handleEmailInputBlur,
     reset: resetEmailInput
    } = useInput(value => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputError ? "invalid" : "valid";
  const emailInputClasses = emailInputError ? "invalid" : "valid";

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
          {nameInputError && <p className="contact__error">Name field must not be empty.</p>}
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
          {emailInputError && <p className="contact__error">Please enter a valid email.</p>}
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
