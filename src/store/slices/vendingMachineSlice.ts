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
  insertedMoney: number
}

export const initialState: IVendingMachineState = {
  isPayment: false,
  products: productsData.products,
  activeMessage: messages.defaultMessage,
  activeProduct: null,
  insertedMoney: 0
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
    insertMoney(state, action: {payload: number, type: string }) {
      const amountToBeInserted = action.payload;
      state.insertedMoney += amountToBeInserted;

      const areEnoughMoneyInserted = (state.activeProduct?.price! - state.insertedMoney) < 0;
      if (areEnoughMoneyInserted) {
        state.activeMessage = messages.enoughMoneyMessage;
      }
    },
    cancelOrder(state) {
      state.isPayment = false;
      state.activeMessage = messages.cancelMessage + state.insertedMoney + '$';
      state.activeProduct = null;
      state.insertedMoney = 0;
    },
    completeOrder(state) {
      const change = state.insertedMoney - state.activeProduct?.price!;

      state.isPayment = false;
      state.activeMessage = messages.successMessage + change + '$';
      state.activeProduct = null;
      state.insertedMoney = 0;
    }
  }
})

export const {
  proceedToPayment, insertMoney, cancelOrder, completeOrder
} = vendingMachineSlice.actions

export const selectProducts = (state: RootState) =>
  state.vendingMachine.products

export const selectActiveMessage = (state: RootState) =>
  state.vendingMachine.activeMessage

export const selectIsPayment = (state: RootState) =>
  state.vendingMachine.isPayment

export const selectActiveProduct = (state: RootState) =>
  state.vendingMachine.activeProduct

export const selectInsertedMoney = (state: RootState) =>
  state.vendingMachine.insertedMoney

export default vendingMachineSlice.reducer
