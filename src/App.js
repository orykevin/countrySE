import React ,{ useState,useEffect } from 'react'
import './Style/App.scss';
import useFetch from './Function/useFetch';
import CountryDetails from './Component/CountryDetails';
import CountrySearch from './Component/CountrySearch';


function App() {
  const [country,setCountry] = useState(null)
  const [display,setDisplay] = useState(1);

  return (
    <div className="App">
      {display  == 1 && <CountrySearch setCountry={setCountry} setDisplay={setDisplay} />}
      {display == 2 && <CountryDetails country={country} setDisplay={setDisplay} />}
    </div>
  );
}

export default App;
