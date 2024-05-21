import React from 'react';
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";



function You() {

    const scheme=yup.object().shape() ({
        firstname:yup.string().matches().required()

    })

  return (
    <div>
        <h1>Hi, I'm</h1>
        <input type='text' />
        <input type='text'/>

    </div>
  )
}

export default You