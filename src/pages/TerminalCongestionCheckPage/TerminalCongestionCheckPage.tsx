import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import PortDropdown from '@components/PortDropdown/PortDropdown';
import TerminalCongestionList from '@features/TerminalCongestionCheck/TerminalCongestionList/TerminalCongestionList';
import './TerminalCongestionCheckPage.scss';

const TerminalCongestionCheckPage = () => {
  const portOptions = ['부산항', '울산항']; // 예시 항목
  const dropdownLabel = '항만선택'; // 드롭다운 기본 라벨

  return (
    <>
      <NavigationBar navText={navItems[4]} />
      <PortDropdown options={portOptions} label={dropdownLabel} />
      <TerminalCongestionList />
    </>
  );
};

export default TerminalCongestionCheckPage;
