import React, { useEffect } from 'react'
import  "./style.module.css"
import classes from "./style.module.css"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const AddComments = (comment,setComments) => {

  //ЭТО ТЕСТОВАЯ ВЕРСИЯ ТУТ Я ПРОВОЖУ ТЕСТЫ ПОТОМ УБЕРУ













  const startNum = 1 + comment.comment.length
 

  const [value,setValue] = useState('')
  const [countOtsiv, setCountOtsiv] = useState(startNum)
  const [textOtsivi,setTextOtsivi] = useState("нет отзывов")


useEffect(() =>{
if(startNum -1  < 5 && startNum -1 >1){
    
    setTextOtsivi(` ${startNum -1} отзыва`) 
  } else if(startNum -1 < 2){
    
    setTextOtsivi(`${startNum -1} отзыв`) 
  } else{
    
    setTextOtsivi(`${startNum -1} отзывов`)
  }

},[])


  function countOtsivov(){
    if(countOtsiv < 5 && countOtsiv >1){
      console.log(countOtsiv)
      setTextOtsivi(` ${countOtsiv} отзыва`) 
    } else if(countOtsiv < 2){
      console.log(countOtsiv)
      setTextOtsivi(`${countOtsiv} отзыв`) 
    } else{
      console.log(countOtsiv)
      setTextOtsivi(`${countOtsiv} отзывов`)
    }
  
  
  }


  function saveComment() {
    if(value == ""){
      setValue("")
      alert("нужно что то написать")
    } else{
      setCountOtsiv((prev) => prev+1)
      countOtsivov()
       comment.setComments(
      [...comment.comment,{
        id:uuidv4(),
        title:value,
        name:"Anton",
        time:3,
        opubli:"poh",
        userName:"mongol"
      }]
    )
    }
   
  }
  

  return (
    <>
    <div className={classes.userOtsiv}>
    <div className={classes.palka}></div>
    <div className={classes.otsivText}>

       <h2>Отзывы пользователей</h2>
    <h3>{textOtsivi}</h3>
    </div>
   
  </div>

    <div className={classes.containerOtsiv}>
      
      <div className={classes.user}>
        <div className={classes.img}></div>
        <div className={classes.inputOtsiv}>
          <input type="text" placeholder='оставьте отзыв' value={value} onChange={(e) => setValue(e.target.value)}/>
        <hr />
        </div>
        <div className={classes.buttonsOtsiv}>
          <button className={classes.otmena} onClick={() => {
            setValue("")
          }}>отмена</button>
          <button className={classes.add } onClick={() =>{
          saveComment()
          setValue("")
          }} >оставить отзыв</button>
        </div>
      </div>
    </div>
    
    
    </>

    
  )
}

export default AddComments