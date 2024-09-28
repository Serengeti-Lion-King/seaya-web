import './ImportExportProgressModal.scss';

interface ImportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImportExportProgressModal = ({
  isOpen,
  onClose,
}: ImportExportModalProps) => {
  if (!isOpen) return null;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-content"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <p>아직 작업 중에 있습니다.</p>
        <button type="button" className="modal-button" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ImportExportProgressModal;
