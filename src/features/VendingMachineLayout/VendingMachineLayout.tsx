import KeypadContainer from 'features/Keypad/KeypadContainer';
import PaymentsContainer from 'features/Payments/PaymentsContainer';
import ProductsCotainer from 'features/Products/ProductsCotainer';
import styles from './VendingMachineLayout.module.scss';

interface IVendingMachineLayout {
  isPayment: boolean;
}

const VendingMachineLayout = ({ isPayment }: IVendingMachineLayout) => {
  return (
    <div className={styles.vendingMachineLayoutWrapper}>
      <ProductsCotainer />
      {isPayment ? <PaymentsContainer /> : <KeypadContainer />}
    </div>
  );
};

export default VendingMachineLayout;
