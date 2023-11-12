import React from 'react'
import Layout from '../shared/Layout'
import { useState } from 'react'
import { Formik } from 'formik'
import { auth, createUserProfileDocument } from '../../firebase'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate()
  const [ error , setError ] = useState(null)

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  const initialValues = {
    firstname: '',
    email: '',
    password: '',
  }

  const handleSignUp = async (values, { setSubmitting }) =>{
    const { firstname, email, password } = values

    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName: firstname })
      navigate('/shop')
      setSubmitting(false)
    }catch (error){
      console.log(error)
      setSubmitting(false)
      setError(error)
    }}
  

  return (
    <Layout>
      <div className='container'>
        <div className='title-container'>
          Sign Up
        </div>
        <div className='form-container'>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSignUp}>
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              const { firstname, email, password } = errors
              return (
                <form autocomplete="off" onSubmit={handleSubmit}>
                    <input
                      type='text'
                      name='firstname'
                      onChange={handleChange}
                      value={values.firstname}
                      placeholder='First Name'
                      className={firstname ? 'error' : ''}
                    />
                    <input
                      type='email'
                      name='email'
                      onChange={handleChange}
                      value={values.email}
                      placeholder='Email'
                    />
                    <input
                      type='password'
                      name='password'
                      onChange={handleChange}
                      value={values.password}
                      placeholder='Password'
                      className={password ? 'error' : ''}
                    />
                    <button type='submit' disabled={isSubmitting} className='outlined-btn submit-btn'>
                      Sign Up
                    </button>
                  <div className='error-message'>
                    {
                      error && <p>{error.message}</p>
                    }
                  </div>
                </form>
              )
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
