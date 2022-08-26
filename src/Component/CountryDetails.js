import React ,{ useState,useEffect } from 'react'
import "../Style/CountryDetails.scss"
import globe from "../Img/globe.svg"
import team from "../Img/team.svg"
import CountryCalling from './CountryCalling'
import CountryCurrency from './CountryCurrency'
import useFetch from '../Function/useFetch'

function CountryDetails({country,setDisplay}) {
    console.log(country)
   const {data,error,loading} = useFetch(`https://api.worldbank.org/v2/country/${country.altSpellings[0]}?format=json`)
   let levelIncome = 1;
   //if(data) console.log(data[1][0].incomeLevel.id)
   if(data) {
    if(data[1][0].incomeLevel.id === "LIC"){
        levelIncome = 2;
    }else if(data[1][0].incomeLevel.id === "LMC"){
        levelIncome = 3;
    }else if(data[1][0].incomeLevel.id === "UMC"){
        levelIncome = 4;
    }else if(data[1][0].incomeLevel.id === "HIC"){
        levelIncome = 5;
    }
   }
  return (
    <div className='country-details-cont'>
        <div className='back-btn' onClick={()=>setDisplay(1)}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L1 8L8 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 8H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>Back to Homepage</p>
        </div>
        <div className='name-details'>
            <div className='nameflag'>
                <h1>{country.name}</h1>
                <img src={country.flags.svg} alt="" />
            </div>
            <div className='more-details'>
                <p>{country.altSpellings[0]}</p>
                <p className={!country.altSpellings[1] ? "hidden" : ""}>{country.altSpellings[1]}</p>
                <p className={!country.altSpellings[2] ? "hidden" : ""}>{country.altSpellings[2]}</p>
            </div>
            <div className='sub-region'>
            <div className='money'>
                        <h6>Country Wealth : </h6>
                        <p>{data ? data[1][0].incomeLevel.value : ""}</p>
                        <div className='dollar-sign'>
                        <span className='signed' >$</span>
                        <span className={levelIncome > 1 && "signed"}>$</span>
                        <span className={levelIncome > 2 && "signed"}>$</span>
                        <span className={levelIncome > 3 && "signed"}>$</span>
                        <span className={levelIncome > 4 && "signed"}>$</span>
                        </div>
                        
            </div>
            <div className='population'>
            <h6>Population</h6>
                <div className='latlong-info'>
                    <p>{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                </div>
                <img src={team} alt="" />
            </div>
        </div>
            <div className='sub-region'>
            <div className='CRS-section'>
                    <h6 className='first'>Capital : <strong> {country.capital} </strong></h6>
                    <h6>Region : <strong> {country.region} </strong></h6>
                    <h6>Subregion :<strong>  {country.subregion} </strong></h6>
                </div>
                <div className='latlong'>
                    <h6>LatLong</h6>
                    <div className='latlong-info'>
                        <span>{country.latlng[0].toFixed(1)} ,</span>
                        <span>{country.latlng[1].toFixed(1)}</span>
                    </div>
                    <img src={globe} alt="" />
                </div>
                
            </div>
        </div>
        
        <div className='callncurr-cont'>
        <CountryCalling callcode={country.callingCodes} />
        <CountryCurrency currency={country.currencies[0].code} />
        </div>
    </div>
  )
}

export default CountryDetails