import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const store = configureStore({
  // reducer: authReducer,
  reducer: { auth: authReducer }
})

export default store