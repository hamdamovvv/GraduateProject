import React from 'react'
import  "./style.module.css"
import classes from "./style.module.css"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

import { Rating } from '@mui/material';
const Comments = (comment,setComments) => {
  const numArr = [1,2,3,4,5]
  let [total,settotal] = useState()
  const [pred,setPred] = useState(0)




 const startNum =comment.comment.length
 
console.log(startNum)
 const [value,setValue] = useState('')
 const [countOtsiv, setCountOtsiv] = useState(comment.comment.length )
 const [textOtsivi,setTextOtsivi] = useState("нет отзывов")

console.log(countOtsiv)






function countOtsivov(){
   if(countOtsiv-1 < 5 && countOtsiv-1 >1){
   
     setTextOtsivi(` ${countOtsiv-1} отзыва`) 
   } else if(countOtsiv-1 < 2){
   
     setTextOtsivi(`${countOtsiv-1} отзыв`) 
   } else{
   
     setTextOtsivi(`${countOtsiv-1} отзывов`)
   }
 
 
 }


useEffect(() =>{
if(countOtsiv   < 5 && countOtsiv   >1){
  
   setTextOtsivi(` ${countOtsiv  } отзыва`) 
 } else if(countOtsiv   < 2){
   
   setTextOtsivi(`${countOtsiv  } отзыв`) 
 } else{
   
   setTextOtsivi(`${countOtsiv  } отзывов`)
 }
 console.log("USEs")

},[])

 





 function deleteOtsiv(id){



  
  setCountOtsiv((prev) => prev-1)

 
countOtsivov()
  
   
   // console.log(countOtsiv)
    let newOtsiv = [...comment.comment].filter(item =>item.id!=id)
    console.log(newOtsiv)
    comment.setComments(newOtsiv)
  
    
  }
 






 function saveComment() {
   if(value == ""){
    countOtsivov()
    console.log(countOtsiv)
     setValue("")
     alert("нужно что то написать")
   } else{
     setCountOtsiv((prev) => prev+1)
     if(countOtsiv +1 < 5 && countOtsiv +1 >1){
   
      setTextOtsivi(` ${countOtsiv +1} отзыва`) 
    } else if(countOtsiv +1 < 2){
    
      setTextOtsivi(`${countOtsiv +1} отзыв`) 
    } else{
    
      setTextOtsivi(`${countOtsiv +1} отзывов`)
    }
     console.log(countOtsiv)
      comment.setComments(
     [...comment.comment,{
       id:uuidv4(),
       title:value,
       name:"Anton",
       time:3,
       opubli:"опубликовано сейчас",
       userName:"mongol"
     }]
   )
   }
  
 }







  return (
 <>
 
<div className={classes.box}>
     

    <div className={classes.containerOtsiv}>
       <div className={classes.numberOfOtsivov}>
         <h1>Понравился дизайнер?</h1>
         <ul>
          <h4>оставье отзыв</h4>
          <li>{textOtsivi}</li>
         </ul>
         
       </div>

       <hr />


       <input type="text" placeholder='Оставить отзыв' onChange={(e) =>{
           setValue(e.target.value)
           console.log(value)
       }}/>
       <button onClick={() =>{
        saveComment()
        
       }} className={classes.dobavit}>Добавить отзыв</button>
    </div> 




   {
    comment.comment.map(item =>(

<div className={classes.container} key={item.id}>
    <div className={classes.userInfo}>
       <div className={classes.userFoto}
     
       ></div>

       <div className={classes.userMail}>
        <h2 onClick={() => {
          deleteOtsiv(item.id)
        }}>{item.userName}</h2>
        <p>{item.mail}</p>
       </div>

      <h3>{item.opubli}</h3>

    </div>
<div className={classes.StarRating} >
  <Rating precision={0.5}></Rating>
  <p>32,111</p>
</div>
    


    <div className={classes.commentText}>
          <p>{item.title}</p>
    </div>


</div>
    ))
   }


      
    




</div>


 


 

 </>
  )
}

export default Comments
