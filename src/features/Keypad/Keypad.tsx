import { useState } from 'react';
import styles from './Keypad.module.scss';

interface IKeypad {
  keyPadKeys: string[];
  proceedToPayment: () => void;
}

const Keypad = ({ keyPadKeys, proceedToPayment }: IKeypad) => {
  const [currentKeysList, setCurrentKeyList] = useState('');

  const changeKeyList = (key: string) => {
    const isCKey = key === 'C';
    const isEKey = key === 'E';
    const isKeyLimit = currentKeysList.length > 2;

    if (isCKey) return resetKeyList();
    if (isEKey) return processToPayment();
    if (isKeyLimit) return;

    setCurrentKeyList((prev) => prev + key);
  };

  const resetKeyList = () => {
    setCurrentKeyList('');
  };

  const processToPayment = () => {
    if (currentKeysList.length !== 3) return;
    // TODO do samo validations if the code is right
    proceedToPayment();
  };

  return (
    <div>
      <div>You have entered: {currentKeysList} </div>
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
