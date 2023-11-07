import React from 'react'
import Layout from '../shared/Layout'
import { useState } from 'react'
import { Formik } from 'formik'
import { auth, createUserProfileDocument } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import './SignUp.style.scss'

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
      <div className='sign-up'>
        <h1>SingUp</h1>
        <div className='form-container'>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSignUp}>
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
              const { firstname, email, password } = errors
              return (
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type='text'
                      name='firstname'
                      onChange={handleChange}
                      value={values.firstname}
                      placeholder='First Name'
                      className={'nomad-input' + (firstname ? 'error' : '')}
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      onChange={handleChange}
                      value={values.email}
                      placeholder='Email'
                      className={'nomad-input' + (email ? 'error' : '')}
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      onChange={handleChange}
                      value={values.password}
                      placeholder='Password'
                      className={'nomad-input' + (password ? 'error' : '')}
                    />
                  </div>
                  <div className='submit-btn'>
                    <button type='submit' disabled={isSubmitting} className='button is-black nomad-btn submit'>
                      Sign Up
                    </button>
                  </div>
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