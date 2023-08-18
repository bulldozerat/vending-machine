import { IProduct } from 'types/VendingMachine.interfaces';
import styles from './Products.module.scss';

interface IProducts {
  products: IProduct[];
}

const Products = ({ products }: IProducts) => {
  return (
    <div className={styles.productsWrapper}>
      {products.length &&
        products.map(({ id, title, price, stock, code }) => {
          if (stock < 1) return;

          return (
            <div key={id} className={styles.productWrapper}>
              <div className={styles.productTitle}>{title}</div>
              <div>
                Code: <span>{code}</span>
              </div>
              <div>Stock {stock}</div>
              <div>
                Price <span>{price}$</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;
