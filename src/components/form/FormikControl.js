import React from 'react'
// import Input from './Input'
import MyInput from './MyInput'
import MyTextarea from './MyTextarea'
// import Textarea from './Textarea'
// import Select from './Select'
// import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
// import DatePicker from './DatePicker'
// import ChakraInput from './ChakraInput'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
    case 'input':
      return <MyInput {...rest} />
    case 'textarea':
      return <MyTextarea {...rest} />
      
    // case 'select':
    //   return <Select {...rest} />
    // case 'radio':
    //   return <RadioButtons {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    // case 'date':
    //   return <DatePicker {...rest} />
    // case 'chakraInput':
    //   return <ChakraInput {...rest} />
    default:
      return null
  }
}

export default FormikControl
