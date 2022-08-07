import React ,{ useState,useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {

  const [data,setData] = useState(null)
  const [error,setError] =useState(null)
  const [loading,setLoad] =useState(false)

  useEffect(()=>{
    setLoad(true);
    axios.get(url).then((response)=>{
        setData(response.data)
    }).catch((err)=>{
        setError(err)
    }).finally(()=>{
        setLoad(false)
    })
  },[url])

  return {data,error,loading}
}

export default useFetch