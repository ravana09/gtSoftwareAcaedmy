import React, { useState } from "react";
import * as yup from 'yup';
import { Formik, ErrorMessage } from "formik";

function FormValidation() {
  let [data, setData] = useState({
    firstName: "",
    SurName: "",
    Email: "",
    Age: "",
    phoneNumber: "",
  });


  const schema = yup.object().shape({
    firstName: yup.string().matches(/^[a-zA-Z]$/,'Name should be in alphabet letters only').required("First Name is required"),
    SurName: yup.string().required("SurName is required"),
    Email: yup.string().matches(/^[a-zA-Z0-9]{8,}$/,'password must more than 8 chars').required(),
    Age:yup.number().positive('age must be positive values').integer().required(),
    phoneNumber:yup.number().max(10).required()
  })

  function handleChanges(e){

    setData({...data,[e.target.name]:e.target.value})
  }

  function handleSubmit(){
  //  e.preventDefault();
    alert("form has been submitted succesfully")

  }

  return (
    <div>
        <Formik
        initialValues={data}
        validationSchema={schema}
        enableReinitialize
        onSubmit={handleSubmit}
        >
            {({handleSubmit})=>(
      <form
        onSubmit={
          handleSubmit
        }  noValidate
      >
        <input
          type="text"
          onChange={ (e)=>{
            handleChanges(e)
          }}
          name="firstName"
          placeholder="Enter your First Name"
        />
        <ErrorMessage name="firstName" component='div' />
        <input
          type="text"
          onChange={ (e)=>{
            handleChanges(e)
          }}
          name="SurName"
          placeholder="Enter your Sur Name"
        />
        <ErrorMessage name="SurName" component='div' />
        <input
          type="Email"
          onChange={ (e)=>{
            handleChanges(e)
          }}
          name="Email"
          placeholder="Enter your Email"
        />
        <ErrorMessage name="Email" component='div' />
        <input
          type="number"
          onChange={ (e)=>{
            handleChanges(e)
          }}
          name="Age"
          placeholder="Enter your Age"
        />
        <ErrorMessage name="Age" component='div' />
        <input
          type="Number"
          onChange={ (e)=>{
            handleChanges(e)
          }}
          name="PhoneNumber"
          placeholder="Enter your PhoneNumber"
        />
        <ErrorMessage name="PhoneNumber" component='div' />
        <button type="Submit">Submit</button>
      </form>
            )}
      </Formik>
    </div>
  );
}

export default FormValidation;
