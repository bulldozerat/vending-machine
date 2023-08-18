import Keypad from 'features/Keypad/KeypadContainer';
import Products from 'features/Products/ProductsCotainer';

function App() {
  return (
    <div className='app'>
      <div className='content-wrapper'>
        <Products />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
