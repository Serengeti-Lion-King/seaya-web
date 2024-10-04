import WestIcon from '@assets/west.svg?react';
import useCustomNavigation from '@hooks/useCustomNavigation';
import './NavigationBar.scss';

type NavigationBarProps = {
  navText: string;
};

const NavigationBar = ({ navText }: NavigationBarProps) => {
  const { navigateTo } = useCustomNavigation(); // 커스텀 훅 사용

  return (
    <div className="navigation-bar">
      <WestIcon
        className="navigation-bar__icon"
        onClick={() => navigateTo('/')}
      />
      <span>{navText}</span>
    </div>
  );
};

export default NavigationBar;
