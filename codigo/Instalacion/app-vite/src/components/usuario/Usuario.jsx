const Usuario = ({usuario}) => {
    const {nombres, apellidos, salario, estado} = usuario
    return (
        <div className="card mt-3">
            <div className="card-header">
                <div className="d-flex justify-content-between">
                    <div>{nombres} {apellidos}</div>
                    {estado === 'inactivo' 
                        ? <span className="badge text-bg-danger">Inactivo</span>
                        : <span className="badge text-bg-success">Activo</span>
                    }
                    {/* <span className="badge text-bg-danger">{estado === 'inactivo' ? 'inactivo' : null}</span>  */}
                </div>
            </div>
            <div className="card-body">
                
                <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="btn btn-warning">Editar</a>
                    <a href="#" className="btn btn-danger">Eliminar</a>
                </div>
            </div>  
        </div>
    )
}

export default Usuario