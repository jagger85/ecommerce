import React from 'react'
import Layout from '../shared/Layout'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { useState } from 'react'

function SignIn() {

  const [ error, setError ] = useState(null)
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: '',
  }

  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setSubmitting(false)
      navigate('/shop')
    }catch (error) {
      console.log(error)
      setSubmitting(false)
      setError(error)
    }
  }

  return (
    <Layout>
      <div className='container'>
      <div className='title-container'>
        Sign In
      </div>
      <div className='form-container'>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSignIn}>
          {({values, errors, handleChange, handleSubmit, isSubmiting}) => {
            return (
              <form autocomplete="off" onSubmit={handleSubmit}>
                  <input type='email' name='email' onChange={handleChange} className={'nomad-input'} placeholder='Email' value={values.email}></input>
                  <input type='password' name='password' onChange={handleChange} className={'nomad-input'} placeholder='Password' value={values.password}></input>
                  <button type='submit' disabled={isSubmiting} className='outlined-btn submit-btn'>
                    Sing In
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

export default SignIn
