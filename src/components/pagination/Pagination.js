import React from 'react'

export default function Pagination({setPageNumber, pageNumber}) {

   //Previous page method
   let prev = () => {
      if( pageNumber === 1) return;
      setPageNumber((prevValue) => prevValue - 1);
   };
   // Next page method
   let next = () => {
      setPageNumber((prevValue) => prevValue + 1);
   };

  return (
    <div className='container d-flex justify-content-center my-5 gap-4'>
      <button onClick={prev} type="button" className='btn btn-primary'> Prev</button>

      <button onClick={next} type="button" className='btn btn-primary'> Next</button>
      
    </div>
  )
}
