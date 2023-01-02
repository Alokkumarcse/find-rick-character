import React from 'react'
import FilterBtn from '../FilterBtn';

const Gender = ({setPageNumber, setGender}) => {
   let genders = ["male", "female", "genderless", "unknown"];
   return (
      <div className="accordion-item">
         <h2 className="accordion-header" id="headingOne">
            <button 
               className="accordion-button collapsed" 
               type="button" 
               data-bs-toggle="collapse" 
               data-bs-target="#collapseOne" 
               aria-expanded="false" 
               aria-controls="collapseOne"
            > Gender </button>
         </h2>
         <div id="collapseOne" className="accordion-collapse collapse"aria-labelledby="headingOne" data-bs-parent="#accordionExample">  
            <div className="accordion-body">
               {genders.map((item, index) => (
                  <FilterBtn 
                     //filter task perform by setGender()
                     task={setGender}
                     setPageNumber={setPageNumber}
                     name="gender" 
                     key={index} 
                     index={index} 
                     item={item} />
               ))}

            </div>
         </div>
      </div>
   )
}

export default Gender;
