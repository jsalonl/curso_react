import ElementoUsuario from "./ElementoUsuario"

const TablaUsuario = ({usuarios}) => {
    return (
        <table className="table table-bordered table-striped">
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Accion</th>
            </tr>
        </thead>
        <tbody>
        {
            usuarios && usuarios.users.map( (usuario) =>  {
            return (
                <ElementoUsuario key={usuario.id} usuario={usuario} />
            )
            })
        }
        </tbody>
        </table>
    )
}

export default TablaUsuario