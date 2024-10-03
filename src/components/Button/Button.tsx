import './Button.scss';

interface ButtonProps {
  text: string;
  className?: string;
}

const Button = ({ text, className = '' }: ButtonProps) => {
  return <button className={`login-button ${className}`}>{text}</button>;
};

export default Button;
