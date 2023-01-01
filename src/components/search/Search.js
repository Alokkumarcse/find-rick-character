import React from 'react'
import styles from './Search.module.scss';

export default function Search({setSearch, setPageNumber}) {
  return (
      <form className= {`${styles.form}`}>
         <input 
            onChange={(e) => {
               setPageNumber(1);
               setSearch(e.target.value);
            } }
            type="text" 
            className=""
            placeholder="Search text"
         />
         <button 
            className='btn btn-primary'
            onClick={(e) => e.preventDefault()}
         >Search</button>
      </form>
  )
}
