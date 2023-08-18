import { v4 as uuidv4 } from 'uuid';
import { IProduct } from 'types/VendingMachine.interfaces';
import styles from './Payments.module.scss';

interface IPayments {
  activeProduct: IProduct;
  listWithAvailableMoney: number[];
}

const Payments = ({ activeProduct, listWithAvailableMoney }: IPayments) => {
  const { title, price } = activeProduct;

  return (
    <div>
      <div>
        To buy a <span className='bold'>{title}</span> you need to add <span className='bold'>{price}$</span> more
      </div>
      <div>
        <div className='bold'>Please Insert Money</div>
        <div className={styles.paymentsMoneyWrapper}>
          {listWithAvailableMoney.map((amount) => {
            const isCoin = amount < 1;

            return (
              <span key={uuidv4()} className={isCoin ? styles.coin : styles.note}>
                {amount}$
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Payments;
