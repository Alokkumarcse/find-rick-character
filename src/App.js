import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Filter from "./components/filter/Filter";
import Card from "./components/cards/Card";
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";
import Navbar from "./components/navbar/Navbar";

import {BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/cards/CardDetails";

function App() {
  return (
    // Setting how to route our app in different pages
    <Router>
        <div className="App">
          {/* Navbar of app rendering here to stop navbar render when route to different page*/}
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />

          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />

          <Route path="/location" element={<Location />}/>
          <Route path="/location/:id" element={<CardDetails />} />
        </Routes>
    </Router>
  )
}

const Home = () =>  {
  // useState() hooks to manage the state, initially our pageNumber is "1" and fetchedData is [].
  let [pageNumber, setPageNumber] = useState(1);
  // useState() hooks to implement search features
  let [search, setSearch] = useState("");
  //implement filter features which is using their status to filter!
  let [status, setStatus] = useState(""); 
  // implement filter features which is using their gender to filter!
  let [gender, setGender] = useState("");
  // implement filter feature which is using species type to filter!
  let [species, setSpecies] = useState("");


  // useState() hooks to fetch data via making api call
  let [fetchedData, updateFetchedData] = useState([]);
  // Destructuring the fetchedData to get access of separated data
  let {info, results} = fetchedData;

  // test here what we get as info and results
  // console.log(info);
  // console.log(results);

  // Fetch data via making api call using useEffect() to perfrom the api call side effect
  const baseUrl = 'https://rickandmortyapi.com/api';
  let api = `${baseUrl}/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  // console.log(api);
  
  // UseEffect() render the component whenever any change happen in api
  useEffect(() => {
    (async function(){
      let data = await fetch(api).then((response) => response.json());
      updateFetchedData(data);
    }())
  }, [api]);

  return (
    <div className="App">
      <div className="text-center"> Characters</div>
      {/* search box component render here */}
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      {/* Main container holds filter and card components */}
      <div className="container">
        <div className="row">
          {/* Render filter component to show filtered characters*/}
          <Filter 
            setStatus={setStatus} 
            setSpecies={setSpecies}
            setGender={setGender}
            setPageNumber={setPageNumber}  
          />
          {/* Render Card component to show all characters */}
          <div className="col-lg-8 col-12 ">
            <div className="row"> 
              <Card page="/" results={results}/>
            </div>
          </div>
        </div>
      </div>
      {/* pagination component render here */}
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}


export default App;
