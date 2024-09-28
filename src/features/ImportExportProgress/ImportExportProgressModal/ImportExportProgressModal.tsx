import { useEffect, useRef } from 'react';
import './ImportExportProgressModal.scss';

interface ImportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImportExportProgressModal = ({
  isOpen,
  onClose,
}: ImportExportModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // 모달이 열리면 첫 번째 버튼에 포커스를 이동
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <p>아직 작업 중에 있습니다.</p>
        <button type="button" className="modal-button" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ImportExportProgressModal;
