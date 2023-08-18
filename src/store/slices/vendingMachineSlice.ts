import { createSlice, current } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import { IProduct } from 'types/VendingMachine.interfaces';

import productsData from '../../utils/products.json';
import messages from 'utils/messages';

export interface IVendingMachineState {
  isPayment: boolean
  products: IProduct[]
  activeMessage: string
  activeProduct: IProduct | null
}

export const initialState: IVendingMachineState = {
  isPayment: false,
  products: productsData.products,
  activeMessage: messages.defaultMessage,
  activeProduct: null
}

const vendingMachineSlice = createSlice({
  name: 'vendingMachineSlice',
  initialState,
  reducers: {
    proceedToPayment(state, action: { payload: string, type: string }) {
      const product = current(state.products).find(p => p.code === action.payload);

      if (!product) {
        state.activeMessage = messages.wrongProductNumber;
        return;
      }
      
      state.activeProduct = product;
      state.isPayment = true;
      state.activeMessage = messages.paymentMessage;
    },
  }
})

export const {
  proceedToPayment
} = vendingMachineSlice.actions

export const selectProducts = (state: RootState) =>
  state.vendingMachine.products

export const selectActiveMessage = (state: RootState) =>
  state.vendingMachine.activeMessage

export const selectIsPayment = (state: RootState) =>
  state.vendingMachine.isPayment

  export const selectActiveProduct = (state: RootState) =>
  state.vendingMachine.activeProduct

export default vendingMachineSlice.reducer
