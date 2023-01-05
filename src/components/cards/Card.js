import React from 'react';
import {Link} from "react-router-dom";
import styles from  './Card.module.scss';


function Card({ results , page}) {
   let display;

   if (results) {
      // making card of results data
      display = results.map((ele) => {
         // console.log(ele);
         //destructuring the data
         let { id, name, image, location, status } = ele;
         return (
            <Link  
               style={{textDecoration:"none"}}
               to={`${page}${id}`} 
               key={ id } 
               className='col-4 mb-4 position-relative text-dark'
            >
               <div className= {styles.card}>
                  <img src={ image } alt="" className={`img-fluid ${styles.img}`} />
                  <div className='content' style={{padding:"10px"}} >
                     <div className={styles.fs3}>{ name }</div>
                     <div className='location'>
                        <div className={`${styles.fs1} mt-3`}>Last location</div>
                        <div className={styles.fs2}>{ location.name }</div>
                     </div>
                  </div>
               </div>
               {/* we write the condition here to show status in different color, use iife for to run only once */}
               { (() => {
                  if(status === "Dead"){ 
                     return (
                        <div className={`${styles.badge} position-absolute badge text-bg-danger`}>{status}</div>
                     )
                  }else if(status === "Alive"){
                     return ( 
                        <div className={`${styles.badge} position-absolute badge text-bg-success`}>{status}</div>
                     )
                  }else {
                     return (
                        <div className={`${styles.badge} position-absolute badge text-bg-secondary`}>{status}</div>
                     )
                  }
               })()}
              
            </Link>
         );
      });
   } else {
      display = "No Characters found /:(";
   }

   //returning the data in formate of cards
   return <>{ display }</>;
}

export default Card