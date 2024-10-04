import './Input.scss';

interface InputProps {
  labelText: string;
  inputText: string;
}

const Input = ({ labelText, inputText }: InputProps) => {
  return (
    <div className="input-item id">
      <label className="text-label">{labelText}</label>
      <input type="text" placeholder={inputText} className="input-id" />
    </div>
  );
};

export default Input;
