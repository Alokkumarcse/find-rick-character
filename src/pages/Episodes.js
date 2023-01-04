import React, {useEffect, useState} from 'react';
import Card from "../components/cards/Card";
import InputGroup from '../components/filter/category/InputGroup';

const Episodes = () => {
  // useState() to manage the state
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  
  //destructuring info variable
  let {air_date, name} = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  //useEffect() use to show change whenever api is changed
  useEffect(() => {
    // write a iife function to fetch data from api each time and store into data
    (async function() {
      let data = await fetch(api).then((response) => response.json());
      console.log(data);
      //set the data into info
      setInfo(data);
      // extract all character data from fetched data character 
      let characterData = await Promise.all(
        data.characters.map( async (url) => {
          const res = await fetch(url);
          return await res.json();
        })
      )
      // set the characterData into results and result pass into card as props
      setResults(characterData);
    })();
  }, [api])    


  return (
    <div className='container'>
      <div className='row mb-4 '>
        <h1 className='text-center mb-4'>
          Episodes : {" "}
          <span className="text-primary">{name ==="" ? "Unknown" : name}</span> 
        </h1>
        <h5 className='text-center'>Air Date {air_date ==="" ? "Unknown" : air_date} </h5>
      </div>

      <div className='row'>    
        <div className='col-3'>
          <h4 className='text-center mb-4'>Pick Episodes</h4>
          <InputGroup setID={setID} name="Episode" total={51} />
        </div>
 
        <div className='col-8'>
          <div className='row'>
            <Card results={results}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Episodes;