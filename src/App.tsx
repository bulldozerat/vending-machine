import InformationMessageContainer from 'features/InformationMessage/InformationMessageContainer';
import KeypadContainer from 'features/Keypad/KeypadContainer';
import ProductsCotainer from 'features/Products/ProductsCotainer';

function App() {
  return (
    <div className='app'>
      <InformationMessageContainer />
      <div className='content-wrapper'>
        <ProductsCotainer />
        <KeypadContainer />
      </div>
    </div>
  );
}

export default App;
