import React from "react";
import RegistrationForm from "./components/RegistrationForm.jsx";
// import FormikForm from './components/FormikForm.jsx';
import FormikForm from "./components/FormikForm"

const App = () => {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <FormikForm /> 
    </div>
  );
};

export default App;
