import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validEmail, setValidEmail] = useState(true);
  const { name, email, message } = formState;
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function updateFormState(e) {
    if (e.target.name === "email") {
      setValidEmail(isValidEmail(e.target.value));
    }
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function checkEmpty(e) {
    if (!e.target.value) {
      alert(e.target.name + " is required ");
    }
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log("Submit Form", formState);
  //   }
  // };

  // const handleChange = (e) => {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage("");
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //     console.log("Handle Form", formState);
  //   }
  // };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateFormState}
          onBlur={checkEmpty}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={updateFormState}
          onBlur={checkEmpty}
        />
        <div style={{ display: validEmail ? "none" : "" }}>
          Please Enter a Valid Email
        </div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={message}
          onChange={updateFormState}
          onBlur={checkEmpty}
        ></textarea>
      </div>
    </form>
  );
}

export default Contact;
