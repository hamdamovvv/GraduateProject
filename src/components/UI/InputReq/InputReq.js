import React from 'react'
import classes from './InputReq.module.css'

const InputReq = ({propsClases,...props}) => {
  const PropsClasses = propsClases ? propsClases : ''
  return <input {...props} className={`${classes.main} ${PropsClasses}`} />
}

export default InputReq