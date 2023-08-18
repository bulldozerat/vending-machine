import { useAppDispatch } from 'hooks/reduxHooks';
import { proceedToPayment } from '../../store/slices/vendingMachineSlice';
import Keypad from './Keypad';

const keyPadKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'E', '0', 'C'];

const KeypadContainer = () => {
  const dispatch = useAppDispatch();

  return <Keypad keyPadKeys={keyPadKeys} proceedToPayment={() => dispatch(proceedToPayment())} />;
};

export default KeypadContainer;
