import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './features/auth/authSlice';
import productReducer from './features/product/productSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
