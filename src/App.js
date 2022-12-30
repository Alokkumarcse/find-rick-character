import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Filter from "./components/filter/Filter";
import Card from "./components/cards/Card";
import { computeStyles } from "@popperjs/core";

function App() {
  // useState() hooks to manage the state, initially our pageNumber is "1" and fetchedData is [].
  let [pageNumber, setPageNumber] = useState(1);
  let [fethcedData, updateFetchedData] = useState([]);

  // Destructuring the fetchedData to get access of seprated data
  let {info, results} = fethcedData;

  // test here what we get as info and results
  // console.log(info);
  // console.log(results);

  // Fetch data via making api call using useEffect() to perfrom the api call side effect
  const baseUrl = 'https://rickandmortyapi.com/api';
  let api = `${baseUrl}/character/?page=${pageNumber}`;
  console.log(api);
  
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((response) => response.json());
      updateFetchedData(data);
    }())
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Find <span className="text-primary">Rick-Morty</span> Characters
      </h1>

      <div className="container border">
        <div className="row border border-primary">
          {/* Render filter component to show filter characters*/}
            <div className="col-3">
              <Filter />
            </div>

          {/* Render Card component to show all characters */}
            <div className="col-8 border border-secondary">
              <div className="row border border-success"> 
                <Card />
                <Card />
                <Card />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
