import { useAppSelector } from 'hooks/reduxHooks';
import { selectActiveProduct } from 'store/slices/vendingMachineSlice';
import Payments from './Payments';

const listWithAvailableMoney = [0.01, 0.05, 0.1, 0.25, 1, 2, 5, 10, 20, 50, 100];

const PaymentsContainer = () => {
  const activeProduct = useAppSelector(selectActiveProduct);

  return <Payments activeProduct={activeProduct!} listWithAvailableMoney={listWithAvailableMoney} />;
};

export default PaymentsContainer;
