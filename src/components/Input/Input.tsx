import './Input.scss';

interface InputProps {
  labelText: string;
  inputText: string;
  className?: string;
  inputId: string;
}

const Input = ({
  labelText,
  inputText,
  className = '',
  inputId,
}: InputProps) => {
  return (
    <div className="input-item">
      <label htmlFor={inputId} className="text-label">
        {labelText}
      </label>
      <input
        id={inputId}
        type="text"
        placeholder={inputText}
        className={`input-field  ${className}`}
      />
    </div>
  );
};

export default Input;
