import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';
import {
  selectActiveProduct,
  selectInsertedMoney,
  insertMoney,
  cancelOrder,
  completeOrder,
} from 'store/slices/vendingMachineSlice';
import Payments from './Payments';

const listWithAvailableMoney = [0.01, 0.05, 0.1, 0.25, 1, 2, 5, 10, 20, 50, 100];

const PaymentsContainer = () => {
  const dispatch = useAppDispatch();
  const activeProduct = useAppSelector(selectActiveProduct);
  const insertedMoney = useAppSelector(selectInsertedMoney);

  return (
    <Payments
      activeProduct={activeProduct!}
      listWithAvailableMoney={listWithAvailableMoney}
      insertedMoney={insertedMoney}
      insertMoney={(amount) => dispatch(insertMoney(amount))}
      cancelOrder={() => dispatch(cancelOrder())}
      completeOrder={() => dispatch(completeOrder())}
    />
  );
};

export default PaymentsContainer;
