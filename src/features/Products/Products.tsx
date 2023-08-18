import { useAppSelector } from 'hooks/reduxHooks';
import { selectProducts } from 'store/slices//vandingMachineSlice';

const Products = () => {
  const products = useAppSelector(selectProducts);

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
