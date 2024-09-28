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
  const previousActiveElement = useRef<Element | null>(null);

  useEffect(() => {
    if (isOpen) {
      // 모달이 열리면 이전 포커스 요소 저장
      previousActiveElement.current = document.activeElement;
      // 첫 번째 버튼에 포커스 이동
      closeButtonRef.current?.focus();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      // Cleanup: 키 이벤트 제거
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        // 모달이 닫힐 때 이전 포커스 요소로 포커스 복원
        if (previousActiveElement.current instanceof HTMLElement) {
          previousActiveElement.current.focus();
        }
      };
    }

    // `isOpen`이 `false`일 때는 아무 것도 하지 않음
    return undefined;
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <p id="modal-title">아직 작업 중에 있습니다.</p>
        <button
          type="button"
          className="modal-button"
          onClick={onClose}
          ref={closeButtonRef}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ImportExportProgressModal;
