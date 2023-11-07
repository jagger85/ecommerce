import React from 'react'
import Layout from '../shared/Layout'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import '../sing-up/SignUp.style.scss'
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
      <h1>SignIn</h1>
      <div className='form-container'>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSignIn}>
          {({values, errors, handleChange, handleSubmit, isSubmiting}) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input type='email' name='email' onChange={handleChange} className={'nomad-input'} placeholder='Email' value={values.email}></input>
                  <input type='password' name='password' onChange={handleChange} className={'nomad-input'} placeholder='Password' value={values.password}></input>
                </div>
                <div className='submit-btn'>
                  <button type='submit' disabled={isSubmiting} className='button is-black nomad-btn submit'>
                    Sing In
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
    </Layout>
  )
}

export default SignIn
