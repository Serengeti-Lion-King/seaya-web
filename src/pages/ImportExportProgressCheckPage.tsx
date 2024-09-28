import ImportExportProgressModal from '@features/ImportExportProgress/ImportExportProgressModal/ImportExportProgressModal';
import useModal from '@hooks/useModal';

const ImportExportProgressCheckPage = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button type="button" onClick={openModal}>
        모달 열기
      </button>
      <ImportExportProgressModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default ImportExportProgressCheckPage;
