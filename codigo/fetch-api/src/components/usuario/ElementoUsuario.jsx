import { Button } from "react-bootstrap"

const ElementoUsuario = ({ usuario }) => {
    const {id, firstName, lastName, age, email, phone} = usuario
    return (
        <tr key={id}>
        <td> {firstName} </td>
        <td> {lastName} </td>
        <td> {age} </td>
        <td> {email} </td>
        <td> {phone} </td>
        <td>
            <div className="d-flex gap-2 justify-content-center">
            <Button onClick={ () => console.log(id) } variant="primary">Detalles</Button>
            </div>
        </td>
        </tr>
    )
}

export default ElementoUsuario