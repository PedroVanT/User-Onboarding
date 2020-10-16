import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import schema from "./formSchema";

const initialUsers = [];

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: "",
  email: "",
  password: "",
  ///// RADIO BUTTONS /////
  terms: "",
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: "",
};

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers); // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    yup
      .reach(schema, name) // get to this part of the scheme
      .validate(value) // validate this value
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
// <pre>{JSON.stringify(post, null, 2)}</pre>
