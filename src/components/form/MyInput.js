import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function MyInput (props) {
  const { label, name, ...rest } = props
  return (
    <div className='container form-input'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} placeholder={name} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default MyInput
