import { useCallback, useEffect, useState } from "react";

const useFetch = (url, method, body = null) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async()=>{
    try {
      const response = await fetch(url, {
        method: method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const json = await response.json()
      setData(json)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  },[])
  
  useEffect(() => {
    fetchData()
  }, [])

  return { data, error, isLoading, fetchData }

}

export default useFetch