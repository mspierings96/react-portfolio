import React, { useState } from "react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [validEmail, setValidEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const { name, email, message } = formState;
  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function updateFormState(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    let error = "";
    if (e.target.name === "email" && !isValidEmail(e.target.value)) {
      // setValidEmail();
      error = "Invalid Email";
    }
    setErrorMessage(error);
  }
  function checkEmpty(e) {
    if (!e.target.value) {
      setErrorMessage2(e.target.name + " is required ");
    } else {
      setErrorMessage2("");
    }
  }

  const styles = {
    labels: {
      fontSize: "50px",
    },
    inputs: {
      height: "55px",
      width: "200px",
    },
  };
  return (
    <form style={{ textAlign: "center" }}>
      <div>
        <label style={styles.labels} htmlFor="name">
          Name
        </label>
        <input
          style={styles.inputs}
          type="text"
          name="name"
          value={name}
          onChange={updateFormState}
          onBlur={checkEmpty}
        />
      </div>
      <div>
        <label style={styles.labels} htmlFor="email">
          Email
        </label>
        <input
          style={styles.inputs}
          type="email"
          name="email"
          value={email}
          onChange={updateFormState}
          onBlur={checkEmpty}
        />
      </div>
      <div>
        <label style={styles.labels} htmlFor="message">
          Message
        </label>
        <textarea
          style={styles.inputs}
          name="message"
          value={message}
          onChange={updateFormState}
          onBlur={checkEmpty}
        ></textarea>
      </div>
      <div>{errorMessage === "" ? errorMessage2 : errorMessage}</div>
    </form>
  );
}

export default Contact;
