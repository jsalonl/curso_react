import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import constants from '../../constants'

// Configuración API user
export const userApi = createApi({
  //Path al que vamos a llamar
  reducerPath: 'user',
  // Configuraciones de nuestro endpoint
  baseQuery: fetchBaseQuery({
    baseUrl: constants.API_USER_URL,
    timeout: 10000,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${constants.API_USER_TOKEN}`)
      return headers
    }
  }),
  tagTypes: ['Users'],
  // Definimos el comportamiento de los endpoints
  // Query para métodos GET
  // Mutation para métodos POST, DELETE, PUT, PATCH
  endpoints: (builder) => ({
    // Trae todos los usuarios
    fetchUsers: builder.query({
      query: () => constants.API_USER_ENDPOINT,
      providesTags: ['Users']
    }),
    // Trae un usuario por Id
    fetchUserById: builder.query({
      query: (id) =>  `${constants.API_USER_ENDPOINT}/${id}`,
    }),
    saveUser: builder.mutation({
      query: (payload) => ({
        url: constants.API_USER_ENDPOINT,
        method: 'POST',
        body: payload
      })
    }),
    // Elimina usuario por Id
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `${constants.API_USER_ENDPOINT}/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    })
  })
})


export const {
  useFetchUsersQuery,
  useFetchUserByIdQuery,
  useDeleteUserMutation,
  useSaveUserMutation
} = userApi