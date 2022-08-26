import React ,{ useState,useEffect } from 'react'
import useFetch from '../Function/useFetch'
import "../Style/CountryDetails.scss"

function CountryCalling({callcode}) {
    const [display,setDisplay] = useState(false)
    const{data,error,loading} = useFetch(`https://restcountries.com/v2/callingcode/${callcode}`)
    //if(data) console.log(data)
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
    <div className='calling-cont'>
        <h6>Calling Code</h6>
        <h1>{callcode}</h1>
        <div className='hover-sect'>
        <p><span >{data ? data.length :""} countries</span> with this calling code</p>
        <div className='other-cont'>
            {callMap()}
        </div>
        </div>
    </div>
  )
}

export default CountryCalling