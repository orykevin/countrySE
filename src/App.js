import React ,{ useState,useEffect } from 'react'
import './Style/App.scss';
import useFetch from './Function/useFetch';
import CountryDetails from './Component/CountryDetails';
import CountrySearch from './Component/CountrySearch';
import Credit from './Component/Credit';
import ham from "./Img/ham.svg"


function App() {
  const [country,setCountry] = useState(null)
  const [display,setDisplay] = useState(1);
  const [displayCredit,setCredit] = useState(false)

  return (
    <div className="App">
      <img className='ham-btn' src={ham} alt="" onClick={()=>setCredit(true)} />
      {display  == 1 && <CountrySearch setCountry={setCountry} setDisplay={setDisplay} />}
      {display == 2 && <CountryDetails country={country} setDisplay={setDisplay} />}
      {displayCredit && <Credit displayCredit={displayCredit} setCredit={setCredit} />}
    </div>
  );
}

export default App;
