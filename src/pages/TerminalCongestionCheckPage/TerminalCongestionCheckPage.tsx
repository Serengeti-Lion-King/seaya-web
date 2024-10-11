import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import PortDropdown from '@components/PortDropdown/PortDropdown';
import ToolBar from '@components/ToolBar/ToolBar';
import TerminalCongestionList from '@features/TerminalCongestionCheck/TerminalCongestionList/TerminalCongestionList';

const TerminalCongestionCheckPage = () => {
  const portOptions = ['부산항', '울산항']; // 예시 항목
  const dropdownLabel = '항만선택'; // 드롭다운 기본 라벨

  return (
    <>
      <NavigationBar
        navText={navItems[4]}
        className="terminal-congestion-page-navigation-bar"
      />
      <PortDropdown options={portOptions} label={dropdownLabel} />
      <TerminalCongestionList />
      <ToolBar />
    </>
  );
};

export default TerminalCongestionCheckPage;
