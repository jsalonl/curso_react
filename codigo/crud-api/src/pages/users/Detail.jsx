import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useUserContext } from "../../contexts/UserContext";
import useFetch from "../../hooks/useFetch";

const DetailUser = () => {

  const { userId } = useParams();
  
  const { isLoading, data, error, fetchData } = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`, 'GET')
  
  const { user, setUser } = useUserContext()

  useEffect(() => {
    if (data) {
      setUser(data)
    }
  }, [data, setUser])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(user)

  return(
    <div className="mt-3">
      <h1>Detalle</h1>
      <table className="table table-bordered table-striped">
        <tbody>
        
        </tbody>
      </table>
    </div>
  )
}

export default DetailUser