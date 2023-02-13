import ListaFrutas from "./components/ListaFrutas"
import Button from "./components/Button"
import ButtonState from "./components/ButtonState"

const App = ()=> {

  const user = true

  const titulo = 'Bienvenido usuario'

  const listaFrutas = [ 'durazno', 'pera', 'manzana', 'uva']

  const Titulo = (props) => {
    return user ? <h1>{props.titulo}</h1> : <h1>No esta logueado</h1>
  }

  return (
    <div>
      <Titulo titulo={titulo} />
      <p>Iniciando con React</p>
      <Button id="button1" text="Click button 1" />
      <Button id="button2" text="Click button 2" />
      <ListaFrutas listaFrutas={listaFrutas} />
      <ButtonState />
    </div>
  );
}

export default App;