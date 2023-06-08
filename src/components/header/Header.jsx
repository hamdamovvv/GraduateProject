import React from 'react'
import  "./style.module.css"
import classes from "./style.module.css"
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'

const Header = () => {
  const companies = ['apple','samsung','microsoft','dodopizza']
    
  


  return (
    <>
    <header >
       <div className={classes.Logo}>
         <div className={classes.FutureLogo}></div>
  
           </div>
       <div className={classes.links}>
        
            <Link className={classes.link}>о нас</Link>
       


        
            <Link className={classes.link}>услуги</Link>
       


       
            <Link className={classes.link}>дизайнеры</Link>
        
       
     
       </div>
           
     <div className={classes.search} onClick={(event) => {
      companies.forEach(
        (element) => {
          if(element == event.target.value.toLowerCase()){
            console.log("true")
           console.log(element)
          } 
        }
      )
     }} >
         <div className={classes.searchIcon} ></div>
         <input type="text" placeholder='Поиск комнании' className={classes.searchInput}  

         />
     </div>
       

      <div className={classes.buttons}>
        <Link className={classes.buttonFirst}>Регистрация</Link>
        <Link className={classes.buttonSecond}>Войти</Link>
      </div>
    </header>
    </>
  )
}

export default Header