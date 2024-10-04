import WestIcon from '@assets/west.svg?react';
import './NavigationBar.scss';

type NavigationBarProps = {
  navText: string;
};

const NavigationBar = ({ navText }: NavigationBarProps) => {
  return (
    <div className="navigation-bar">
      <WestIcon className="navigation-bar__icon" />
      <span>{navText}</span>
    </div>
  );
};

export default NavigationBar;
