import React, { useEffect } from 'react'
import  "./style.module.css"
import classes from "./style.module.css"
import Footer from '../../components/Footer/Footer'

import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import DeisgnerPagePag from '../../components/paginationDesignerPage.jsx/deisgnerPagePag'
import Comments from '../../components/otzivi/commentsCard/Comments'
import AddComments from '../../components/otzivi/comments/AddComment'
import { useState } from 'react'
import { Rating } from '@mui/material'















const DisaynerPage = () => {




const [rate,setRate] = useState(0)



  
  const [comment,setComments] = useState([
    {
      id:1,
      title:"First",
      name:"Anton",
      time:'December 19, 1995 20:24:00',
      opubli:"опукбликовано 18 часов назад",
      userName:"Марсель Абрахманов",
      mail:"@marsel"
    },
    {
      id:2,
      title:"Second",
      name:"Anton",
      time:'October 21, 1995 20:24:00',
      opubli:"опукбликовано 18 часов назад",
      userName:"Марсель Абрахманов",
      mail:"@marsel"
    },
    {
      id:3,
      title:"Third",
      name:"Anton",
      time:'December 21, 1993 20:24:00',
      opubli:"опукбликовано 18 часов назад",
      userName:"Марсель Абрахманов",
      mail:"@marsel"
    },
    {
      id:4,
      title:"Fourth",
      name:"Anton",
      time:'December 21, 1995 19:24:00',
      opubli:"опукбликовано 18 часов назад",
      userName:"Марсель Абрахманов",
      mail:"@marsel"
    },
  ])
  










  
  return (
   <>
      <Header/>
     <header>
   

            <div className={classes.pathTo}>
        <div className={classes.pathToText}>
     <Link className={classes.Link}>Главная</Link>
     <div className={classes.strela}></div>

     <Link className={classes.Link}>Все комнании</Link>
     <div className={classes.strela}></div>

     <Link className={classes.Link}>Design Plus</Link>
     <div className={classes.strelaActive}></div>

     <p className={classes.LinkActive}>Дизайнер</p>
     </div>
    </div>
     </header>




   <main>
   <div className={classes.DisaynerContainer}>



    <div>
        <div>
<div className={classes.Disayner}>

      <div className={classes.DisaynerFoto}></div>
      <div className={classes.disaynerName}>
         <h2 >Анна Сергеевна</h2>
         <div className={classes.rating}>
  <h3>{rate}</h3>

               <Rating name="size-small" defaultValue={0}   size="small" onChange={(e) =>{
    setRate(e.target.value) 
   }}    precision={0.5}/>

         </div>
   <p className={classes.disaynerType}>Дизайнер Интерьера</p>
      </div>
      
    </div>


    <div className={classes.buttons}>
      <button className={classes.linkButton}>
       <span></span>
       <div className={classes.buttonContent}>
         <div className={classes.buttonIcon}></div>
       <p>
          +996 596 666 567
       </p>
       </div>
      
     
       <span></span>
      </button>

      <button className={classes.linkButtonSecond}>
       <span></span>
       <div className={classes.buttonContent}>
        <div className={classes.buttonIconSecond}></div>
       <p>
        stylescope@inst.com
       </p>
       
       </div>
       
      <span></span>
      </button>

      <button className={classes.linkButtonThird}>
       <span></span>
       <div className={classes.buttonContent}>
 <div className={classes.buttonIconThirs}></div>
       <p>
         stylescope@gmail.com
       </p>
      

       </div>
      
       <span></span>
      </button>
    </div>


        </div>
   
         

         <div>

  <div className={classes.disaynerText}>
          <h2>Обо мне</h2>
          <p>Опытный дизайнер интерьера, специализирующийся на разработке функциональных, эстетически
и разнообразных пространств.С детства я был увлечен искусством и дизайном, что впоследствии привело к принятию решения перейти к своей области в области дизайна интерьера.</p>
     </div>
         </div>
    </div>
    


   </div>
   
   </main>





        <Comments comment={comment} setComments={setComments} /> 
   <Footer />
   </>
  )
}

export default DisaynerPage