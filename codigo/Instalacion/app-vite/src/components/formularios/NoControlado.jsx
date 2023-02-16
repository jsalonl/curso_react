import { useRef, useState } from 'react' //Hooks

const NoControlado = () => {

    const form = useRef(null)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    // const error = 'Error en el formulario'

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        // Como funciona el formdata
        const data = new FormData(form.current)
        // console.log(...data.entries())

        // Como funciona el Object.fromentries para construir un objeto
        const dataObjeto = Object.fromEntries(data.entries())

        // Validar
        const { nombres, apellidos, estado } = dataObjeto
        if(!nombres.trim() || nombres.length<5) return setError('El campo nombres es obligatorio y debe tener al menos 5 caracteres')
        if(!apellidos.trim()) return setError('El campo apellidos es obligatorio')
        if(!estado.trim()) return setError('El campo estado es obligatorio')

        //Construimos el objeto a enviar
        const usuario = {
            nombres: nombres.trim(),
            apellidos: apellidos.trim(),
            estado: estado.trim()
        }
        //Enviamos
        console.log(`Data a enviar: ${JSON.stringify(usuario)}`)
        setError('')
        setSuccess('Datos enviados correctamente')
    }

    return (
        <>
        {
            error !== '' && <div className="alert alert-danger">{error}</div>
        }
        {
            success !== '' && <div className="alert alert-success">{success}</div>
        }
        <form onSubmit={handleSubmit} ref={form}>
            <div className="form-group">
                <label htmlFor="nombres">Escriba sus nombres</label>
                <input 
                    type="text" 
                    name="nombres" 
                    id="nombres" 
                    className="form-control mb-3" 
                    placeholder="Nombres" 
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
                />
            </div>
            <div className="form-group">
                <label htmlFor="salario">Escriba sus ingresos</label>
                <input 
                    type="tel" 
                    name="salario" 
                    defaultValue={1000000}
                    id="salario" 
                    className="form-control mb-3" 
                    placeholder="1000000" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="Estado">Estado del usuario</label>
                <select name="estado" id="estado" className="form-select mb-3">
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            <button type="submit" className="btn btn-success">Enviar</button>
        </form>
        </>
    )
}

export default NoControlado