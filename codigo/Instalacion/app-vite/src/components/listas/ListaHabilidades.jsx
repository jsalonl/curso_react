import ItemHabilidad from "./ItemHabilidad"

const Listahabilidades = ({habilidadesUsuario}) => {
    return (
        <ul>
            { habilidadesUsuario.map( (habilidad, index) => {
                return <ItemHabilidad key={index} habilidad={habilidad}/>
            }) 
            }
        </ul>
    )
}

export default Listahabilidades