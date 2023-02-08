const mascotas = [
    {nombre: 'Zoro', edad: 1, tipo: 'perro'},
    {nombre: 'Felicia', edad: 2, tipo: 'tortuga'},
    {nombre: 'Contador', edad: 3, tipo: 'gato'},
    {nombre: 'Lucky', edad: 13, tipo: 'perro'},
    {nombre: 'Hera', edad: 1, tipo: 'perro'},
    {nombre: 'Paco', edad: 2, tipo: 'tortuga'},
    {nombre: 'Milo', edad: 2, tipo: 'gato'}   
]

const mascotasNuevas = mascotas.filter(mascota => mascota.tipo === 'tortuga')
console.log(mascotasNuevas)

