import ArrowDownIcon from '@assets/arrow_drop_down.svg?react';
import useDropdown from '@hooks/useDropdown';
import '../../styles/Dropdown.scss';
import terminalOptions from './terminalOptions';

interface TerminalDropdownProps {
  options: string[];
}

const TerminalDropdown = ({ options }: TerminalDropdownProps) => {
  const initialLabel = terminalOptions[0];
  const { isOpen, selectedOption, toggleDropdown, handleOptionClick } =
    useDropdown(initialLabel);

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
                  onClick={() => handleOptionClick(option)}
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

export default TerminalDropdown;
