import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import SearchBar from '@components/SearchBar/SearchBar';
import TerminalDropdown from '@components/TerminalDropdown/TerminalDropdown';
import ToolBar from '@components/ToolBar/ToolBar';
import ImportExportProgressModal from '@features/ImportExportProgress/ImportExportProgressModal/ImportExportProgressModal';
import TrackingStatus from '@features/ImportExportProgress/TrackingStatus/TrackingStatus';
import useModal from '@hooks/useModal';

const ImportExportProgressCheckPage = () => {
  const portOptions = ['PNC', 'HJNC', 'HPNT', 'BNCT']; // 예시 항목
  const dropdownLabel = 'PNIT'; // 드롭다운 기본 라벨

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <NavigationBar navText={navItems[6]} />
      <div className="search-dropdown-wrapper">
        <SearchBar className="temp-search-container" />
        <TerminalDropdown options={portOptions} label={dropdownLabel} />
      </div>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <ImportExportProgressModal isOpen={isOpen} onClose={closeModal} />
      <TrackingStatus />
      <ToolBar />
    </div>
  );
};

export default ImportExportProgressCheckPage;
