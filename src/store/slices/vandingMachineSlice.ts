import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

import productsData from '../../utils/products.json';

interface IProduct {
  id: number
  title: string,
  price: number,
  stock: number,
  code: number
}

export interface IProductsState {
  products: IProduct[]
}

export const initialState: IProductsState = productsData;

const vendingMachineSlice = createSlice({
  name: 'vendingMachineSlice',
  initialState,
  reducers: {
    // openMainModalWithCreateTaskForm(state) {
    //   state.isModalOpened = true
    //   state.renderCreateTaskForm = true
    // },
  }
})

// export const {
//   openMainModalWithCreateTaskForm, openMainModalWithViewTaskForm, closeMainModal
// } = mainModalSlice.actions

export const selectProducts = (state: RootState) =>
  state.vendingMachine.products

export default vendingMachineSlice.reducer
