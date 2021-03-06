import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
function SignupForm() {
	
	
	
    const formik = useFormik({
        initialValues:{
            uname:'',
            email:'',
            password:'',
            cpassword:''
        },
        onSubmit: values => {
            console.log('Form data ', values)
        }
    }   
    )

//console.log('Form values are:', formik.values)
    return (
        <div>
            <h1>Welcome to Signup Form</h1>
            
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="uname">Enter Username</label>
                <input type='text' name='uname' onChange={formik.handleChange} value={formik.values.uname}/>

                <label htmlFor="uname">Enter Email</label>
                <input type='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor="uname">Enter Password</label>
                <input type='text' name='password' onChange={formik.handleChange} value={formik.values.password}/>

                <label htmlFor="uname">Enter Confirm Password</label>
                <input type='text' name='cpassword' onChange={formik.handleChange} value={formik.values.cpassword}/>

                <button>Click Here!</button>
            </form>
        </div>
    )
}

export default SignupForm
