import React from 'react'
import  "./styles.module.css"
import classes from "./styles.module.css"
import {Link} from "react-router-dom"
 const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
      <div className={classes.FooterContent}>


     
        <div className={classes.FooterText}>


         <div className={classes.colum}>
          <Link><p className={classes.firstLink}>о нас</p></Link>
          <Link><p className={classes.notFirst}>контакты</p></Link>
          <Link><p className={classes.notFirst}>миссия и цель</p></Link>
          <Link><p className={classes.notFirst}>гарантии</p></Link>
         </div>


         <div className={classes.colum}>
          <Link><p className={classes.firstLink}>услуги</p></Link>
          <Link><p className={classes.notFirst}>консультация</p></Link>
          <Link><p className={classes.notFirst}>архетиктура</p></Link>
          <Link><p className={classes.notFirst}>ремонт</p></Link>
         </div>


         <div className={classes.colum}>
          <Link><p className={classes.firstLink}>дизайнеры</p></Link>
          <Link><p className={classes.notFirst}>design plus</p></Link>
          <Link><p className={classes.notFirst}>family design</p></Link>
          <Link><p className={classes.notFirst}>neostyle</p></Link>
         </div>


         <div className={classes.colum}>
          <Link><p className={classes.firstLink}></p></Link>
          <Link><p className={classes.notFirst}></p></Link>
          <Link><p className={classes.notFirst}></p></Link>
          <Link><p className={classes.notFirst}></p></Link>
         </div>
 
    
        </div>
    
   
       <div className={classes.FooterLogo}>
        
        <div className={classes.FutureImg}></div>
        <div className={classes.ComName}>StyleScope</div>
        
    </div>
    
    
    <hr className={classes.FooterHr}/>

  
      <div className={classes.socials}>
        <div className={classes.insta}></div>
        <div className={classes.gmail}></div>
        <div className={classes.whats}></div>

      </div>
   


   
      <div className={classes.Adres}>
        <h3>адрес</h3>
        <div className={classes.googleAdres}>
          <div className={classes.googleVector}></div>
          <p>Ибрагимова 103,БЦ Victory</p>
        </div>

        <div className={classes.adresImg}></div>
      </div>
    </div>


    </div>


    
  )
}
export default Footer 