interface IInformationMessage {
  message: string;
}

const InformationMessage = ({ message }: IInformationMessage) => {
  return <div>{message}</div>;
};

export default InformationMessage;
