import { useEffect, useState, useCallback } from 'react'

const useFetch = (url, method) => {

    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    
    const fetchData = useCallback( async() => {
        console.log("Ejecute la consulta a la api")
        try{
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            if(response.status !== 200){
                throw Error('Error al consumir la api')
            }
            const data = await response.json()
            setData(data)
        }catch(error){
            console.log(`Error al consumir la API ${url}`)
            setData(null)
            setError("Error al consumir el servicio")
        }finally{
            setLoading(false)
        }

    } ,[])

    useEffect( () => {
        fetchData()
      },[])

    return { data, loading, error }

}

export default useFetch