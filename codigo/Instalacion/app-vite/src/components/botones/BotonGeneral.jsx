const BotonGeneral = ( { id, nombreBoton, clases, usuarioId } ) => {

    const handleClick = (nombreBoton, usuarioId) => {
        console.log(`Seguro que quiere: ${nombreBoton} con el id de usuario: ${usuarioId}`)
    }

    // const clasesUnidas = clases.join(' ') //En caso de que venga en forma de arreglo
    return (
        <button id={id} className={clases} onClick={ () => handleClick(nombreBoton, usuarioId) }>{nombreBoton}</button>
    )
} 

export default BotonGeneral