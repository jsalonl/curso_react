const Alerta = ({ mensaje, tipo }) => {
  return (
    <div className={`alert alert-${tipo} alert-dismissible fade show`}>
      {mensaje}
    </div>
  )
}

export default Alerta