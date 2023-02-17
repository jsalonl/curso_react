import { useState } from 'react'

const Controlado = ({ agregarUsuario }) => {

    const [ usuario, setUsuario ] = useState({
        nombres: '',
        apellidos: '',
        salario: 1000000,
        estado: 'activo'
    })

    //Envio formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        const { nombres, apellidos, salario, estado } = usuario

        if(nombres === '' || apellidos === '' || salario < 1 || estado === '' ) return alert('Los campos no pueden ser vacios')
        
        agregarUsuario({
            ...usuario,
            id: Date.now()
        })
        //console.log(JSON.stringify(usuario))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setUsuario({ ...usuario, [name]: value.trim()})
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombres">Escriba sus nombres</label>
                    <input
                        type="text"
                        name="nombres"
                        id="nombres"
                        className="form-control mb-3"
                        placeholder="Nombres"
                        // onChange={ (e) => setUsuario({ ...usuario, nombres: e.target.value })}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Escriba sus apellidos</label>
                    <input
                        type="text"
                        name="apellidos"
                        id="apellidos"
                        className="form-control mb-3"
                        placeholder="Apellidos"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salario">Escriba sus ingresos</label>
                    <input
                        type="tel"
                        name="salario"
                        defaultValue={usuario.salario}
                        id="salario"
                        className="form-control mb-3"
                        placeholder="1000000"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Estado">Estado del usuario</label>
                    <select 
                        name="estado" 
                        id="estado" 
                        className="form-select mb-3"
                        onChange={handleChange}
                    >
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rol">Rol del usuario</label>
                    <select 
                        name="rol" 
                        id="rol" 
                        className="form-select mb-3"
                        onChange={handleChange}
                    >
                        <option value="usuario">Usuario</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Agregar</button>
            </form>
        </>
    )
}

export default Controlado