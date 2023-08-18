import React from 'react';

interface IInformationMessage {
  message: string;
}

const InformationMessage = ({ message }: IInformationMessage) => {
  console.log('message: ', message);
  return <div>{message}</div>;
};

export default InformationMessage;
