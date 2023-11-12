import React from 'react'
import '../Checkout.style.scss'
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
    <div className='subcontainer'>
      <div className='subtitle'>Shipping Address</div>
      <Formik 
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values)=>{
          setShipping(values)
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          const { name, email, address } = errors
          return (
            <form className='shipping-form' onSubmit={handleSubmit}>
              <div className='shipping-inputs'>
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

                <button type='submit' className='outlined-btn'>
                  PROCEED TO PAY
                </button>

            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ShippingAddress
