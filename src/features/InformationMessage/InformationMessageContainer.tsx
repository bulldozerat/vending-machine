import { useAppSelector } from 'hooks/reduxHooks';
import { selectActiveMessage } from 'store/slices/vendingMachineSlice';
import InformationMessage from './InformationMessage';

const InformationMessageContainer = () => {
  const message = useAppSelector(selectActiveMessage);

  return <InformationMessage message={message} />;
};

export default InformationMessageContainer;
