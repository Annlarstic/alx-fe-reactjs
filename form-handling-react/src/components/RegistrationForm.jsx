import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationFormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log("Formik Form Data:", values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <label>Username:</label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="div" />
        <br />
        
        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <br />
        
        <label>Password:</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <br />
        
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationFormikForm;
