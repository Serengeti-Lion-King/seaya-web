import './Input.scss';

interface InputProps {
  labelText: string;
  inputText: string;
  className?: string;
}

const Input = ({ labelText, inputText, className = '' }: InputProps) => {
  return (
    <div className={`input-item id ${className}`}>
      <label className="text-label">{labelText}</label>
      <input type="text" placeholder={inputText} className="input-id" />
    </div>
  );
};

export default Input;
