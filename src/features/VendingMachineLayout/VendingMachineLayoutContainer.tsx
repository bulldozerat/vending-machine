import { useAppSelector } from 'hooks/reduxHooks';
import MachineLayout from './VendingMachineLayout';
import { selectIsPayment } from 'store/slices/vendingMachineSlice';

const VendingMachineLayoutContainer = () => {
  const isPayment = useAppSelector(selectIsPayment);

  return <MachineLayout isPayment={isPayment} />;
};

export default VendingMachineLayoutContainer;
