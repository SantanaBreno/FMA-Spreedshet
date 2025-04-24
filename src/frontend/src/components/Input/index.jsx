import { InputContainer } from './styles';

function Input({ width = null, ...props }) {
  return (
    <InputContainer $width={width} {...props} />
  );
}

export default Input;