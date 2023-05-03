import React from 'react'
import  "./style.module.css"
import classes from "./style.module.css"
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
const DisaynerPage = () => {
  return (
   <>
     <header>

            <div className={classes.pathTo}>
        <div className={classes.pathToText}>
     <Link className={classes.Link}>Главная</Link>
     <div className={classes.strela}></div>

     <Link className={classes.Link}>все комнании</Link>
     <div className={classes.strela}></div>

     <Link className={classes.Link}>Design Plus</Link>
     <div className={classes.strela}></div>

     <p className={classes.LinkActive}>Дизайнер</p>
     </div>
    </div>
     </header>
   <main>
    <div className={classes.FutureImg}></div>
     <div className={classes.About}>
        <div className={classes.profil}>

           <h1>Профиль</h1>
           <hr />

           <div >
            <p>Имя.Фамилия</p>
            <h4>Максим Движняков</h4>
           </div>

           <div >
            <p>профессия</p>
            <h4>Дизайнер</h4>
           </div>

           <div >
            <p>опыт работы</p>
            <h4>2 года</h4>
           </div>

         
       </div>
       <div className={classes.AboutMe}>
            <h1>Обо Мне</h1>
            <hr />
            <h4>
            Меня зовут Максим. Я веб-мастер. UI/UX дизайнер. Фрилансер.
            <br />
            Занимаюсь разработкой адаптивных сайтов более 8 лет. За это время успел создать огромное количество веб-сайтов и других графических работ. Много времени уделяю самообразованию. В прошлом – фотограф-ретушер, поэтому прекрасно владею Adobe Photoshop и Adobe Lightroom.
            </h4>
           </div>
        <div className={classes.Information}>
           <h1>Контактная информация</h1>
           <hr />
           <div className={classes.infor}>
            <div>
                <h3>Телефон</h3>
                <br />
                
                    <a href='' className={classes.Number} >+996 (312) 88-41-98</a>
                
            </div>

            <div>
                <h3>E-mail</h3>
                <br />
                
                    <a href=''className={classes.Email}>nemorosi@gmail.com</a>
                
            </div>

            <div>
                <h3>соц-сети</h3>
                <br />
                <div className={classes.social}>
                 <a href="">1</a>
                 <a href="">2</a>
                 <a href="">3</a>
                 <a href="">4</a>
                </div>

            </div>
           </div>
        </div>
    </div>
     
   </main>
   <Footer/>
   </>
  )
}

export default DisaynerPage