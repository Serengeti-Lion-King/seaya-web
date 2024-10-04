import WestIcon from '@assets/west.svg?react';
import { useNavigate } from 'react-router-dom';
import './NavigationBar.scss';

type NavigationBarProps = {
  navText: string;
};

const NavigationBar = ({ navText }: NavigationBarProps) => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/');
  };

  return (
    <div className="navigation-bar">
      <WestIcon className="navigation-bar__icon" onClick={handleIconClick} />
      <span>{navText}</span>
    </div>
  );
};

export default NavigationBar;
