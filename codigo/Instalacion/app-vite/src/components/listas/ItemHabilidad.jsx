const ItemHabilidad = ({habilidad}) => {
    return(
        <li>Habilidad: <a href={`http://localhost:5173/${habilidad}`}>#{habilidad}</a> </li>
    )
}

export default ItemHabilidad