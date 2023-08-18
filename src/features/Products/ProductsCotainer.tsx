import { useAppSelector } from 'hooks/reduxHooks';
import { selectProducts } from 'store/slices/vendingMachineSlice';

import Products from './Products';

function TopNavigationContainer() {
  const products = useAppSelector(selectProducts);

  return <Products products={products} />;
}

export default TopNavigationContainer;
