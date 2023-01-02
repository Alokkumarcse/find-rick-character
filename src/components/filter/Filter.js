import React from 'react';
import Gender from './category/Gender';
import Species from './category/Species';
import Status from './category/Status';

const Filter = ({setStatus, setPageNumber, setSpecies, setGender}) => {
  // make method for clearing the filter- clear() 
  let clear = () => {
    setStatus("");
    setPageNumber(1);
    setSpecies("");
    setGender("");
    // when click on clear filter then reload the page so that earlier marked filter reset
    window.location.reload(false);
  }
  return (
    <div className='col-3'>
      <div className='text-center fs-bold mb-2'>Filter</div>
      <div 
        style={{cursor: "pointer"}}  
        className='text-center text-decoration-underline text-primary'
        onClick={clear}
      >
         Clear Filters
      </div> 

      {/* accordion for different type of filters */}
      <div className="accordion my-4" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
      </div>
    </div>
  )
}

export default Filter;