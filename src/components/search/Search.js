import React from 'react'
import styles from './Search.module.scss';

export default function Search({setSearch, setPageNumber}) {
  return (
      <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-4'>
         <input 
            onChange={(e) => {
               setPageNumber(1);
               setSearch(e.target.value);
            } }
            type="text" 
            className={`${styles.input}`} 
            placeholder="Search text"
         />
         <button 
            className={`btn btn-primary ${styles.btn}`}
            onClick={(e) => e.preventDefault()}
         >Search</button>
      </form>
  )
}
