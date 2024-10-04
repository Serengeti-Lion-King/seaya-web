import './NavigationBar.scss';

type NavigationBarProps = {
  navText: string;
};

const NavigationBar = ({ navText }: NavigationBarProps) => {
  return (
    <div className="navigation-bar">
      <span className="navigation-bar__icon">←</span>
      <span>{navText}</span>
    </div>
  );
};

export default NavigationBar;