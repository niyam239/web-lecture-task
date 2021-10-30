import React from 'react'
import {useFormik} from 'formik'
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
// const validate =values=>{
//     let errors= {}
//     if(!values.uname){
//         errors.uname='Username is required'
//     }
//     if(!values.email){
//         errors.email = 'Email is required'
//     }
//     if(!values.password){
//         errors.password = 'Password is required'
//     }
//     if(!values.cpassword){
//         errors.cpassword = 'CPassword is required'
//     }
//     return errors
// }

function SignupForm() {
        const formik =  useFormik({
            initialValues,
            onSubmit,
            validationSchema
        })
    
    console.log('Form values are :',formik.errors)
//console.log('Form values are:', formik.values)
    return (
      
        <div>
            <h1>Welcome to Signup Form</h1>
            
            <form onSubmit={formik.handleSubmit}>
            <center>
                <div className='form-control'>
                    <label htmlFor="uname">Enter Username</label>
                    <input type='text' name='uname'
                     onChange={formik.handleChange}
                     onBlur ={formik.handleBlur} 
                    value={formik.values.uname}/>
                </div>
                {/* if any error exists in uname then show given msg */}
                {formik.touched.uname && formik.errors.uname?<div className='error'>{formik.errors.uname}</div>:null}
                <div className='form-control'>
                        <label htmlFor="uname">Enter Email</label>
                        <input type='email' name='email' 
                        onChange={formik.handleChange}
                        onBlur ={formik.handleBlur}  
                        value={formik.values.email}/>
                </div>
                {/* if any error exists in email then show given msg */}
                {formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}
                <div className='form-control'>
                        <label htmlFor="uname">Enter Password</label>
                        <input type='text' name='password' 
                        onChange={formik.handleChange} 
                        onBlur ={formik.handleBlur} 
                        value={formik.values.password}/>
                </div>
                {/* if any error exists in uname then show given msg */}
                {formik.touched.password && formik.errors.password?<div className='error'>{formik.errors.password}</div>:null}
                <div className='form-control'>
                        <label htmlFor="uname">Enter Confirm Password</label>
                        <input type='text' name='cpassword' 
                        onChange={formik.handleChange}
                        onBlur ={formik.handleBlur}  
                        value={formik.values.cpassword}/>
                </div>
                
                {/* if any error exists in uname then show given msg */}
                {formik.touched.cpassword && formik.errors.cpassword?<div className='error'>{formik.errors.cpassword}</div>:null}
                </center>
                <div className='buttonlogin'>
                        <button type='submit'>Click Here!</button>
                </div>
            </form>
        </div>
       
    )
}

export default SignupForm
