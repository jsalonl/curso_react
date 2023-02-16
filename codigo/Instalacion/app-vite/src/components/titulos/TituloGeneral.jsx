const TituloGeneral = ( { usuarioActivo, usuario } ) => {
    return (
        usuarioActivo ? <h1>Hola : {usuario} </h1> : <h1><a href="#">Identifiquese</a></h1>
    )
}

export default TituloGeneral