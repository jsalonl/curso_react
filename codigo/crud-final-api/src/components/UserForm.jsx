import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSaveUserMutation } from "../store/apis/userApi";

const UserForm = () => {

  const initialUser = {
    "nombres": "",
    "apellidos": "",
    "edad": "",
    "genero": "",
    "correo": "",
    "celular": "",
    "imagen": "",
    "infoIdentificacion": {
        "tipoId": "CC",
        "numeroId": "",
        "fechaExpedicion": ""
    },
    "infoLaboral": {
        "razonSocial": "",
        "nit": "",
        "programa": "",
        "cargo": ""
    }
  }

  const [ user, setUser ] = useState(initialUser)
  // console.log(user)

  const [ saveUser ] = useSaveUserMutation()

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!user.nombres.trim() || !user.apellidos.trim() ){
      return alert("Campos no pueden estar vacios")
    }
    const payload = [user]
    await saveUser(payload).unwrap()
    return navigate("/usuarios")
  }

  const handleChange = (e) =>{
    const { name, value } = e.target
    setUser({
      ...user,
      imagen: `https://robohash.org/${user.nombres}-${user.apellidos}`,
      [name]: value
    })
  }
  
  const handleChangeInfoIdentificacion = (e) =>{
    const { name, value } = e.target
    setUser({
      ...user,
      infoIdentificacion:{
        ...user.infoIdentificacion,
        [name]: value
      } 
    })
  }
  
  const handleChangeInfoLaboral = (e) =>{
    const { name, value } = e.target
    setUser({
      ...user,
      infoLaboral:{
        ...user.infoLaboral,
        [name]: value
      } 
    })
  }

  // Valida campos al salir
  // const validateField = (e) =>{
  //   const { name, value } = e.target
  //   if(value==""){
  //     return alert("Campo no puede ser vacio")
  //   }
  // }

  return(
    <div className="col-md-12">
      <form onSubmit={handleSubmit} className="row g-2 mt-3">
        <h3>Datos personales</h3>
        <div className="form-floating mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            name="nombres"
            onChange={handleChange}
            // onBlur={validateField}
            placeholder="Nombres" />
          <label htmlFor="nombres">Nombres</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            name="apellidos"
            onChange={handleChange}

            placeholder="Apellidos" />
          <label htmlFor="apellidos">Apellidos</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            name="genero"
            onChange={handleChange}

            placeholder="Genero" />
          <label htmlFor="genero">Genero</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input type="tel"
            className="form-control"
            name="edad"
            onChange={handleChange}

            placeholder="Edad" />
          <label htmlFor="edad">Edad</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input
            type="email"
            className="form-control"
            name="correo"
            onChange={handleChange}
            placeholder="Correo electrónico" />
          <label htmlFor="correo">Correo electrónico</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input
            type="tel"
            className="form-control"
            name="celular"
            onChange={handleChange}

            placeholder="Celular" />
          <label htmlFor="celular">Celular</label>
        </div>

        <h3>Datos de identificación</h3>

        <div className="form-floating mb-3 col-md-4">
          <select
            className="form-select"
            name="tipoId"
            onChange={handleChangeInfoIdentificacion}
            >
            <option value="CC">Cédula ciudadanía</option>
            <option value="CE">Cédula extranjería</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="PAS">Pasaporte</option>
          </select>
          <label htmlFor="tipoId">Tipo de identificación</label>
        </div>
        <div className="form-floating mb-3 col-md-4">
          <input
            type="tel"
            className="form-control"
            name="numeroId"
            onChange={handleChangeInfoIdentificacion}

            placeholder="Número identificación" />
          <label htmlFor="numeroId">Número identificación</label>
        </div>
        <div className="form-floating mb-3 col-md-4">
          <input
            type="date"
            className="form-control"
            name="fechaExpedicion"
            onChange={handleChangeInfoIdentificacion}
placeholder="Fecha Expedición" />
          <label htmlFor="fechaExpedicion">Fecha Expedición</label>
        </div>

        <h3>Datos Laborales</h3>

        <div className="form-floating mb-3 col-md-4">
          <input
            type="tel"
            className="form-control"
            name="nit"
            onChange={handleChangeInfoLaboral}

            placeholder="Nit" />
          <label htmlFor="nit">NIT</label>
        </div>
        <div className="form-floating mb-3 col-md-8">
          <input
            type="text"
            className="form-control"
            name="razonSocial"
            onChange={handleChangeInfoLaboral}

            placeholder="Razón social" />
          <label htmlFor="razonSocial">Razón social</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            name="cargo"
            onChange={handleChangeInfoLaboral}

            placeholder="Cargo" />
          <label htmlFor="cargo">Cargo</label>
        </div>
        <div className="form-floating mb-3 col-md-6">
          <input
            type="text"
            className="form-control"
            name="programa"
            onChange={handleChangeInfoLaboral}
            placeholder="Programa" />
          <label htmlFor="programa">Programa</label>
        </div>

        <div className="d-grid">
          <button
            className="btn btn-success mb-3"
            type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserForm