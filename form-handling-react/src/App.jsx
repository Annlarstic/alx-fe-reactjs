import React from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/FormikForm.js";

const App = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <formikForm />
    </div>
  );
};

export default App;
