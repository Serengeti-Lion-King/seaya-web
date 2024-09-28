import TerminalDropdown from '@components/TerminalDropdown/TerminalDropdown';

const VesselOperationStatusPage = () => {
  const portOptions = ['PNC', 'HJNC', 'HPNT', 'BNCT']; // 예시 항목
  const dropdownLabel = 'PNIT'; // 드롭다운 기본 라벨

  return (
    <div>
      <TerminalDropdown options={portOptions} label={dropdownLabel} />
    </div>
  );
};

export default VesselOperationStatusPage;
