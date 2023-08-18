import { v4 as uuidv4 } from 'uuid';
import { IProduct } from 'types/VendingMachine.interfaces';
import styles from './Payments.module.scss';

interface IPayments {
  activeProduct: IProduct;
  listWithAvailableMoney: number[];
  insertedMoney: number;
  insertMoney: (arg0: number) => void;
  cancelOrder: () => void;
  completeOrder: () => void;
}

const Payments = (props: IPayments) => {
  const { activeProduct, listWithAvailableMoney, insertedMoney, insertMoney, cancelOrder, completeOrder } = props;
  const { title, price } = activeProduct;
  const moneyLeftToBeInserted = price - insertedMoney;
  const isProductReadyToBeBought = moneyLeftToBeInserted > 0;

  return (
    <div className={styles.paymentsWrapper}>
      {isProductReadyToBeBought ? (
        <>
          <div>
            To buy a <span className='bold'>{title}</span> you need to add{' '}
            <span className='bold'>{moneyLeftToBeInserted}$</span> more
          </div>
          <div>
            <div className='bold'>Please Insert Money</div>
            <div className={styles.paymentsMoneyWrapper}>
              {listWithAvailableMoney.map((amount) => {
                const isCoin = amount < 1;

                return (
                  <span
                    onClick={() => insertMoney(amount)}
                    key={uuidv4()}
                    className={isCoin ? styles.coin : styles.note}
                  >
                    {amount}$
                  </span>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div>You have inserted enough money. Please click to buy the product</div>
          <button onClick={completeOrder} className={styles.orderButtonSuccess}>
            Complete Order
          </button>
        </>
      )}

      <div className={styles.paymentsCancelWrapper}>
        Click on{' '}
        <button onClick={cancelOrder} className={styles.orderButtonCancel}>
          Cancel
        </button>{' '}
        to end the order and take your money back
      </div>
    </div>
  );
};

export default Payments;
