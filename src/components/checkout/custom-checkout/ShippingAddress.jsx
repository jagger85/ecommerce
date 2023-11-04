import React from 'react'
import { Formik } from 'formik'

const validate = values => {
  const { name, email, address } = values
  const errors = {}
  if(!email) { errors.mail = 'Required'}
  if(!name) { errors.name = 'Required'}
  if(!address) { errors.address = 'Required'}

  return errors
}

function ShippingAddress({setShipping}) {

  const initialValues = {
    email: '',
    name: '',
    address: ''
  }

  return (
    <div>
      <h4>Shipping Address</h4>
      <Formik 
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values)=>{
          console.log('values', values)
          setShipping(values)
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email, address } = errors
          return (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type='text'
                  name='name'
                  onChange={handleChange}
                  value={values.name}
                  className={'nomad-input' + (name ? 'error' : '')}
                  placeholder='Name'
                />
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  value={values.email}
                  className={'nomad-input' + (email ? 'error' : '')}
                  placeholder='Email'
                />
                <input
                  type='address'
                  name='address'
                  onChange={handleChange}
                  value={values.address}
                  className={'nomad-input' + (address ? 'error' : '')}
                  placeholder='Address'
                />
              </div>
              <div className='submit-btn'>
                <button type='submit' className='button is-black nomad-btn submit'>
                  CONTINUE
                </button>
              </div>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ShippingAddress
