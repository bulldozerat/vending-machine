import { useState } from 'react';
import styles from './Keypad.module.scss';

interface IKeypad {
  keyPadKeys: string[];
  proceedToPayment: (arg0: string) => void;
}

const Keypad = ({ keyPadKeys, proceedToPayment }: IKeypad) => {
  const [currentKeysList, setCurrentKeyList] = useState('');

  const changeKeyList = (key: string) => {
    const isCKey = key === 'C';
    const isEKey = key === 'E';
    const isKeyLimit = currentKeysList.length > 2;

    if (isCKey) return resetKeyList();
    if (isEKey) return processToPayment(currentKeysList);
    if (isKeyLimit) return;

    setCurrentKeyList((prev) => prev + key);
  };

  const resetKeyList = () => {
    setCurrentKeyList('');
  };

  const processToPayment = (currentKeysList: string) => {
    if (currentKeysList.length !== 3) return;
    // TODO do samo validations if the code is right
    proceedToPayment(currentKeysList);
  };

  return (
    <div>
      <div>
        You have entered: <span className='bold'>{currentKeysList}</span>
      </div>
      <div className={styles.keypadWrapper}>
        {keyPadKeys.map((key) => (
          <span key={key} onClick={() => changeKeyList(key)}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Keypad;
