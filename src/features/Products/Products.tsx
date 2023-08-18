import { IProduct } from 'types/VendingMachine.interfaces';

interface IProducts {
  products: IProduct[];
}

const Products = ({ products }: IProducts) => {
  return (
    <div>
      {products.length &&
        products.map(({ id, title, price, stock, code }) => (
          <div key={id}>
            <div>{title}</div>
            <div>
              Code: {code} In Stock {stock}
            </div>
            <div>Price {price}$</div>
          </div>
        ))}
    </div>
  );
};

export default Products;
