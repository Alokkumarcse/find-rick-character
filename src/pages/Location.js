import React, {useEffect, useState} from 'react';
import Card from "../components/cards/Card";
import InputGroup from '../components/filter/category/InputGroup';

const Location = () => {
  // useState() to manage the state
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  
  //destructuring info variable
  let {name, type, dimension} = info;

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  //useEffect() use to show change whenever api is changed
  useEffect(() => {
    // write a iife function to fetch data from api each time and store into data
    (async function() {
      let data = await fetch(api).then((response) => response.json());
      // console.log(data);
      //set the data into info
      setInfo(data);
      // extract all character data from fetched data character 
      let location = await Promise.all(
        data.residents.map( async (url) => {
          const res = await fetch(url);
          return await res.json();
        })
      )
      // set the characterData into results and result pass into card as props
      setResults(location);
    })();
  }, [api])    


  return (
    <div className='container'>
      <div className='row mb-4 '>
         <h1 className='text-center mb-4'>
            Location : {" "}
            <span className="text-primary">{name ==="" ? "Unknown" : name}</span> 
         </h1>
         <h5 className='text-center'>Dimension : { dimension==="" ? "Unknown" : dimension} </h5>
         <h6 className='text-center'>Type : { type==="" ? "Unknown" : type} </h6>
      </div>

      <div className='row'>    
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'>Pick Location</h4>
          <InputGroup setID={setID} name="Location" total={126} />
        </div>
 
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Card pages="/location/" results={results}/>
          </div>
        </div> 
      </div>
      
    </div>
  )
}

export default Location;