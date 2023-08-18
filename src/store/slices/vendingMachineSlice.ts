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

export interface IVendingMachineState {
  isPayment: boolean
  products: IProduct[]
}

export const initialState: IVendingMachineState = {
  isPayment: false,
  products: productsData.products
}

const vendingMachineSlice = createSlice({
  name: 'vendingMachineSlice',
  initialState,
  reducers: {
    proceedToPayment(state) {
      console.log('proceedToPayment')
      state.isPayment = true
    },
  }
})

export const {
  proceedToPayment
} = vendingMachineSlice.actions

export const selectProducts = (state: RootState) =>
  state.vendingMachine.products

export default vendingMachineSlice.reducer
