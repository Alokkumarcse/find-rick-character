import React from 'react';

const InputGroup = ({total, name, setID}) => {
  return (
   <div className="input-group mb-3">
      <select 
         className="form-select" 
         id="{name}"
         //method to fetch data for each episode whenever we change episode
         onChange={(e) => setID(e.target.value)}
      >
         <option selected>Choose...</option>
         {/* create episodes list using Array() and ...spread operator */}
         {[...Array(total).keys()].map((x) => {
            return  <option value={x + 1}> {name}-{x + 1} </option>;
         })}
      </select>
   </div>
  ) 
}

export default InputGroup