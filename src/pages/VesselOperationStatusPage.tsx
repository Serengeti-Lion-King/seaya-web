import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import TerminalDropdown from '@components/TerminalDropdown/TerminalDropdown';
import {
  dropdownLabel,
  terminalOptions,
} from '@components/TerminalDropdown/terminalOptions';
import GateSlider from '@features/VesselOperationStatus/GateSlider/GateSlider';

const VesselOperationStatusPage = () => {
  return (
    <div>
      <NavigationBar navText={navItems[5]} />
      <TerminalDropdown options={terminalOptions} label={dropdownLabel} />
      <GateSlider />
    </div>
  );
};

export default VesselOperationStatusPage;
