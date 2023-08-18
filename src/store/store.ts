import { combineReducers, configureStore } from '@reduxjs/toolkit'
import vencingMachineSlice from 'store/slices/vendingMachineSlice'

export const rootReducer = combineReducers({
  vendingMachine: vencingMachineSlice
})

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
