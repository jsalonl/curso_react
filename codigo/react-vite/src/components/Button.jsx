
const Button = ({ text }) => {

  const handleClick = (title) => {
    console.log('Has dado click en: ', title)
  }

  return <button onClick={() => handleClick(text)} >{text}</button>
}

export default Button