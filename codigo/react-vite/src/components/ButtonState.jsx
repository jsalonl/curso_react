import { useState } from 'react'

const ButtonState = () => {

  let contador = 0

  // const arrayState = useState(0)
  // console.log(arrayState)
  // const stateNumber = arrayState[0]
  // const stateFunction = arrayState[1]

  const [count, setCount] = useState(0)

  const handleClick = () => {
    // contador++
    // console.log(`'Has dado click en el boton ${contador} veces`)
    // stateFunction(stateNumber + 1)
    setCount(count + 1)
  }
  
  // return <button onClick={handleClick}>Button State: {stateNumber}</button>
  return <button onClick={handleClick}>Button State: {count}</button>

}

export default ButtonState