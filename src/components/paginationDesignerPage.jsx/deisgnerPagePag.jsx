import React, { useEffect, useState } from 'react'
import  "./style.module.css"
import classes from "./style.module.css"
import axios from 'axios'
import { Pagination } from '@mui/material'
import { Container,Stack } from '@mui/material'


const DeisgnerPagePag = () => {
      const work=[
    {
        page:1,
        text:"img1",
        secondText:"img2"
    },
    {
        page:2,
        text:"img1",
        secondText:"img2"
    },
    {
        page:3,
        text:"img1",
        secondText:"img2"
    },
    {
        page:4,
         text:"img1",
        secondText:"img2"
    },


    
  ]

  
  const [page,SetPage] = useState(0)
  const [pageQnt,SetPageQnt] = useState(0)
  const [text,setText] = useState([])
const [second,setSecond] = useState([])

    useEffect((data) => {
       
       data = work
        
        
        
        SetPageQnt(data.length)
    },[])

    
  return (
     <>
     <Container >
          
     {
             
             <>
             <div>
            
          <div className={classes.imgPg}>{text}</div>
          
             </div>
           
             </>
         
          
      }  
 
        <Stack spacing={2}>
         {!!pageQnt &&(<Pagination className={classes.Pagination}
         variant="outlined"
         count={pageQnt}
         page={page}
         onChange={(_,num) => {
            console.log(num)
            SetPage(num)
           
            console.log(work[num -1])
            setText(work[num -1 ].text)
            setSecond(work[num-1].secondText)
        }
        }
         
         
         />)}
         
            
       
        
        </Stack>
    </Container> 
    
     </>
  )
}


export default DeisgnerPagePag
