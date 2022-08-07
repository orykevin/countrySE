import React ,{ useState,useEffect } from 'react'
import useFetch from '../Function/useFetch'
import "../Style/CountryDetails.scss"

function CountryCurrency({currency}) {

  const{data,error,loading} = useFetch(`https://restcountries.com/v2/currency/${currency}`)
    if(data) console.log(data)
    const callMap = ()=>{
        if(data){
            return(
                data.map((i,n)=>{
                    return <p key={n}>{i.name}</p>
                })
            )
        }
    }
  return (
    <div className='currency-cont'>
        <h6>Currency</h6>
        <h1>{currency}</h1>
        <div className='hover-sect'>
        <p><span >{data ? data.length :""} countries</span> with this currency</p>
        <div className='other-cont'>
            {callMap()}
        </div>
        </div>
    </div>
  )
}

export default CountryCurrency