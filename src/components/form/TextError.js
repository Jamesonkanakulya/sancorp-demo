import React from 'react'

function TextError (props) {
  return <div style={{color:"red",fontSize:'14px'}} className='error'>{props.children}</div>
}

export default TextError
