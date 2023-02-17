import Usuario from "./Usuario"

const ListaUsuarios = ({ usuarios, eliminarUsuario }) => {

    return (
        <>
        <h1 className="mt-3 text-center">Lista de usuarios</h1>
        {
          usuarios.map( (usuario) => {
            return <Usuario key={usuario.id} usuario={usuario} eliminarUsuario={eliminarUsuario} />
          })
        }
        </>
    )
}

export default ListaUsuarios