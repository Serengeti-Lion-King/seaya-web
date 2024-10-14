import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import PortDropdown from '@components/PortDropdown/PortDropdown';
import {
  dropdownLabel,
  portOptions,
} from '@components/PortDropdown/portOptions';
import TerminalCongestionList from '@features/TerminalCongestionCheck/TerminalCongestionList/TerminalCongestionList';
import './TerminalCongestionCheckPage.scss';

const TerminalCongestionCheckPage = () => {
  return (
    <>
      <NavigationBar navText={navItems[4]} />
      <PortDropdown options={portOptions} label={dropdownLabel} />
      <TerminalCongestionList />
    </>
  );
};

export default TerminalCongestionCheckPage;
