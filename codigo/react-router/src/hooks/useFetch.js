import { useState, useEffect, useCallback } from 'react'

const useFetch = (url) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async() => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error('Error al consumir la API')
      }
      const data = await response.json()
      setData(data)  
    } catch (error) {
      setData([])
      setError(error.message)
    } finally{
      setLoading(false)
    }
    
  },[])
  
  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error }
}

export default useFetch