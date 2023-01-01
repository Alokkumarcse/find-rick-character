import React from 'react'
import ReactPaginate from 'react-paginate';

export default function Pagination({info, setPageNumber, pageNumber}) {
   /******** make basic pagination
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
   ******/
   
   // ! implement ReactPaginate library
   // get page number from info props 
   // console.log(info.pages);
   return (
      <ReactPaginate
         // use ? to prevent code breaking, when info data is fetched via api call
         // info?.pages means info?.page == info.pages == 42 (we have total pages = 42)
         className="pagination justify-content-center gap-2 my-4"
         forcePage={pageNumber===1? 0: pageNumber -1}
         nextLabel="Next"
         previousLabel="Prev" 
         nextClassName="btn"
         previousClassName="btn"
         pageClassName="page-item"
         pageLinkClassName="page-link"
         // giving the page number data we selected
         onPageChange={(data) => {
            setPageNumber(data.selected + 1)}
         }
         //use active class to hight light page we are currently
         activeClassName="active"
         pageCount={info?.pages }
      />
 
   )


}
