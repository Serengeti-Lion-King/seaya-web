import WestIcon from '@assets/west.svg?react';
import useCustomNavigation from '@hooks/useCustomNavigation';
import './NavigationBar.scss';

interface NavigationBarProps {
  navText: string;
}

const NavigationBar = ({ navText }: NavigationBarProps) => {
  const { navigateTo } = useCustomNavigation(); // 커스텀 훅 사용

  return (
    <div className="nav-bar">
      <WestIcon className="back-icon" onClick={() => navigateTo('/')} />
      <span>{navText}</span>
    </div>
  );
};

export default NavigationBar;
