// Button.tsx

import '@styles/Button.scss';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, className = '', onClick }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
