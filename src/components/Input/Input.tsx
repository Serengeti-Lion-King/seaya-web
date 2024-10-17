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
    <div className={`input-item ${className}`}>
      <label htmlFor={inputId} className="text-label">
        {labelText}
      </label>
      <input
        id={inputId}
        type="text"
        placeholder={inputText}
        className="input-id"
      />
    </div>
  );
};

export default Input;
