import ArrowDownIcon from '@assets/arrow_drop_down.svg?react';
import useDropdown from '@hooks/useDropdown';
import '../../styles/Dropdown.scss';
import portOptions from './portOptions';

interface PortDropdownProps {
  options: string[];
  onPortChange: (port: string) => void; // 선택된 항구를 상위 컴포넌트로 전달하는 함수
}

const PortDropdown = ({ options, onPortChange }: PortDropdownProps) => {
  const initialLabel = portOptions[0];
  const { isOpen, selectedOption, toggleDropdown, handleOptionClick } =
    useDropdown(initialLabel);

  const handlePortSelection = (option: string) => {
    handleOptionClick(option);
    onPortChange(option); // 선택된 항구를 상위 컴포넌트로 전달
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-toggle"
          onClick={toggleDropdown}
        >
          <span className="dropdown-text">
            {selectedOption || initialLabel}
          </span>
          <ArrowDownIcon
            className={`arrow-icon ${isOpen ? 'arrow-icon--up' : 'arrow-icon--down'}`}
          />
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map(option => (
              <li className="menu-option" key={option}>
                <button
                  className="option-button"
                  type="button"
                  onClick={() => handlePortSelection(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PortDropdown;
