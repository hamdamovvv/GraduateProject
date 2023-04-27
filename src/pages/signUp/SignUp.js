import React from 'react'
import { InputReq } from '../../components/UI'
import classes from './SignUp.module.css'

const SignUp = () => {
  return (
    <div className={classes.main}>
      <div className='container'>
        <div >
          <form action="" className={classes.form}>
            <InputReq placeholder='username' name='username'/>
            <InputReq/>
            <InputReq/>
            <InputReq/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp