import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import SearchBar from '@components/SearchBar/SearchBar';
import TerminalDropdown from '@components/TerminalDropdown/TerminalDropdown';
import terminalOptions from '@components/TerminalDropdown/terminalOptions';
import ImportExportProgressModal from '@features/ImportExportProgress/ImportExportProgressModal/ImportExportProgressModal';
import TrackingStatus from '@features/ImportExportProgress/TrackingStatus/TrackingStatus';
import useModal from '@hooks/useModal';

const ImportExportProgressCheckPage = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <NavigationBar navText={navItems[6]} />
      <div className="search-dropdown-wrapper">
        <SearchBar className="temp-search-container" />
        <TerminalDropdown options={terminalOptions} />
      </div>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <ImportExportProgressModal isOpen={isOpen} onClose={closeModal} />
      <TrackingStatus />
    </div>
  );
};

export default ImportExportProgressCheckPage;
