import React, { useState, useEffect } from "react";
import Card from"./components/card.jsx";
import Select from "./components/select.jsx";
import Input from "./components/input.jsx";
import useFetch from "./hooks/useFetch.jsx";


function App() {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  const [full, setFull] = useState(false);
  const {get} = useFetch("https://restcountries.com/v3.1/");


    useEffect(() => {
        get("all")
        .then((data) => setCountries(data))
        .catch((error) => console.log("error"))    
      
    }, [searchCountry, region])
  
   useEffect(() => { 
      if(loading){
        get(`region/${region}`)
        .then((data) => setCountries(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
      }
    }, [region])

     useEffect(() => {
      if(loading && searchCountry){
        get(`name/${searchCountry}`)
        .then((data) => {setCountries(data)})
        .catch((error) => console.log("error"))
        .finally(() => setLoading(false))
      }
    }, [searchCountry]) 

    

  function handleFormSubmit(e){
    e.preventDefault();
  } 
  function handleRegionSubmit(e){
    e.preventDefault();
    setLoading(true);
    setRegion(e.target.value);
  }
  function handleSearchCountry(e){
    e.preventDefault();
    setLoading(true);
    setSearchCountry(e.target.value);
  }
  function handleClickCard(e) {
    e.preventDefault();
    if (!full) {
      setFull(true);
    } else {
      setFull(false);
    }
    console.log(e.target)
  }
 
     
  return (
      <div className={`w-screen px-5 bg-white text-black`}>
        {/* HEADER */}
        <div className="header flex justify-between align-baseline p-5 px-10">
          <h1 className="font-black text-2xl">Where in the world?</h1>
          <button>Dark Mode</button>
        </div>
        {/* SEARCH BAR & SELECT OPTIONS */}
        <div className="flex justify-evenly items-start md:items-center gap-4 p-5 flex-col md:flex-row">
          <Input onSearchCountry={handleSearchCountry}/>
          <Select  onFormSubmit={handleFormSubmit}  onRegionSubmit={handleRegionSubmit}/>
        </div>
        {/* CARD COMPONENTS */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 `}>
          {countries && countries.map((c, i) => {
            return (
              <Card   
                full={full} 
                onClickCard={handleClickCard}            
                key={i}
                image={c.flags.svg}
                name={c.altSpellings[1] ?? c.altSpellings[0]}
                region={c.region}
                population={c.population}
                capital={c.capital}
              />
            );})
            }
        </div>
      </div>
  );
}

export default App;

