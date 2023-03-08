import { createSlice } from "@reduxjs/toolkit"
import { v4 as autoId } from "uuid"

const initialState = [
  {
    id: autoId(),
    name: "John Doe",
    email: "johndoe@gmail.com",	
  },
  {
    id: autoId(),
    name: "Sara Jones",
    email: "sarajones@gmail.com",
  },
  {
    id: autoId(),
    name: "James Nolan",
    email: "jamesnolan@gmail.com",
  }
]

const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers:{
    addUser: (state, action) =>{
      // console.log(action)
      //Opcion 1
      // state.push(action.payload)
      //Opcion 2
      return [...state, action.payload]
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload
      const userFound = state.find(user => user.id === id)
      if(userFound){
        userFound.name = name
        userFound.email = email
      }
    },
    deleteUser: (state, action) => {
      //Opcion 1
      // const userFound = state.find(user => user.id === action.payload)
      // if(userFound){
      //   state.splice(state.indexOf(userFound),1)
      // }
      //Opcion 2
      return state.filter(user => user.id !== action.payload)
    }
  }
})

export { userSlice }
export const { addUser, editUser, deleteUser } = userSlice.actions
export default userSlice.reducer