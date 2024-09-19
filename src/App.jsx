import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const LoginForm  = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .oneOf(['rishiME@199'], 'Password must be "rishiME@199"')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <div style={{border:"2px solid black", display:"flex",width:"60%",marginLeft:"250px",marginTop:"100px"}}>
    <div style={{padding:"10px",width:"50%",}}>
    <Formik

      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert('Form submitted successfully!');
        console.log('Form data', values);
      }}
    >
      {({ isValid, dirty }) => (
        
        <Form>
          <h2 style={{marginLeft:"10px"}}>Welcome!!!</h2>
          <div style={{margin:"10px"}}>
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className="error" style={{color:"red"}} />
          </div>

          <div style={{margin:"10px"}}>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" style={{color:"red"}}/>
          </div>

          <div style={{margin:"10px"}}>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" style={{color:"red"}}/>
          </div>

          <div style={{margin:"10px"}}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error" style={{color:"red"}}/>
          </div>

          <button type="submit" disabled={!(isValid && dirty)} style={{margin:"10px",padding:"10px",borderRadius:"10px"}}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    </div>
    <div style={{width:"50%"}}>
         <img src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" style={{justifyContent:"center",objectFit:"cover",width:"100%"}} />
    </div>
    </div>
  );
};

export default LoginForm ;
