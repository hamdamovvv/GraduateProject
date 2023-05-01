import React from 'react'
import  "./styles.module.css"
import classes from "./styles.module.css"

export const Footer = () => {
  return (
    <div className={classes.FooterContainer}>
        <div className={classes.FooterText}>
<p><Link className={classes.FooterLink}>о комнании</Link></p>
    <p><Link className={classes.FooterLink}>услугии</Link></p>
    <p><Link className={classes.FooterLink}>дизайнеры</Link></p>
        </div>
    
   
       <div className={classes.FooterLogo}>
        
        <div className={classes.FutureImg}></div>
        <div className={classes.ComName}>logotip</div>
        
    </div>
    
    <p className={classes.LogoText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit!</p>
    <hr className={classes.FooterHr}/>
    <div className={classes.FooterEmail}>alma.lawson@example.com</div>
    </div>
  )
}
