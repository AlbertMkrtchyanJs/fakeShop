import { Formik, Form, Field } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import style from "./Login.module.css";

const Login = ({ users }) => {
  const navigate = useNavigate();

  const proverka = (val, users) => {
    const user = users.find((user) => user.email === val.email);
    if (user) {
      let bull = user.password === val.password;
      if (bull) {
        navigate("/profile", { state: user });
      }else{
       alert('Invalid Email or Password!!!')
      }
    }
  };

  return (
    <div>
        <h2>Log In</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(val) => proverka(val, users)}
      >
        <Form className={style.logForm}>
          <Field className={style.input} name="email" placeholder="Email" />
          <Field className={style.input} name="password" type="password" placeholder="Password" />
          <NavLink to="/registration" style={{ textDecoration: "none" }}>
            <p>Forgot password?</p>
          </NavLink>
          <button type="submit" className={style.butt}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
