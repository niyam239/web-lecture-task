import React from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'

const initialValues = {
        uname:'',
        email:'',
        password:'',
        cpassword:''
 };
 const onSubmit= values => {
   
}
const validationSchema = Yup.object({
    //we have to set all textbox
    uname:Yup.string().required('Username field is required'),
    email:Yup.string().email('Invalid email').required("Email-id field is required"),
    password:Yup.string().min(3,"Password is too short ").max(10,"Password is too long").required('Password field is required'),
    cpassword:Yup.string().min(3,"Password is too short ").max(10,"Password is too long").required('Confirm Password field is required')
})


function NewSignupForm() {
    return (
        <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema = {validationSchema}>
         <Form>
          {/* //this is form control of formik not of html form  */}
         
         <div className='form-control'>
                    <label htmlFor="uname">Enter Username</label>
                    <Field type='text' name ='uname'/>
                    <ErrorMessage name='uname'>{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>
         </div>
         <div className='form-control'>
                    <label htmlFor="email">Enter email</label>
                    <Field type='email' name ='email'/>
                    <ErrorMessage name='email'>{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>
         </div>
         <div className='form-control'>
                    <label htmlFor="password">Enter Password</label>
                    <Field type='text' name ='password'/>
                    <ErrorMessage name='password'>{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>
         </div>
         <div className='form-control'>
                    <label htmlFor="cpassword">Enter Confirm Password</label>
                    <Field type='text' name ='cpassword'/>
                    <ErrorMessage name='cpassword'>{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>
         </div>
         <div className='buttonlogin'>
                        <button type='submit'>Click Here!</button>
                        
                </div>
         </Form>
                    
        </Formik>
       
    )
}

export default NewSignupForm
