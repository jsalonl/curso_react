import Fruta from "./Fruta"

const ListaFrutas = (props) => {
  return (
    <ul>
      {props.listaFrutas.map((fruta, index) => {
        return <Fruta key={index} fruta={fruta} />
      })}
    </ul>
  )
}

export default ListaFrutas