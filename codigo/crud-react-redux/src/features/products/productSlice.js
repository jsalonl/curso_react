import { createSlice } from "@reduxjs/toolkit"
import { v4 as autoId } from "uuid"

const initialState = [
  {
    id: autoId(),
    product: "Jabon Dove",
    detail: "Jabo para piel delicada",	
  },
  
]

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers:{
    addProduct: (state, action) =>{
      // console.log(action)
      //Opcion 1
      // state.push(action.payload)
      //Opcion 2
      return [...state, action.payload]
    },
    editProduct: (state, action) => {
      const { id, name, email } = action.payload
      const userFound = state.find(user => user.id === id)
      if(userFound){
        userFound.name = name
        userFound.email = email
      }
    },
    deleteProduct: (state, action) => {
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

export { productSlice }
export const { addProduct, editProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer