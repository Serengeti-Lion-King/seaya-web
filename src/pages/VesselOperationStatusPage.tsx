import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import TerminalDropdown from '@components/TerminalDropdown/TerminalDropdown';
import GateSlider from '@features/VesselOperationStatus/GateSlider/GateSlider';

const VesselOperationStatusPage = () => {
  const portOptions = ['PNC', 'HJNC', 'HPNT', 'BNCT']; // 예시 항목
  const dropdownLabel = 'PNIT'; // 드롭다운 기본 라벨

  return (
    <div>
      <NavigationBar navText={navItems[5]} />
      <TerminalDropdown options={portOptions} label={dropdownLabel} />
      <GateSlider />
    </div>
  );
};

export default VesselOperationStatusPage;
