import useDropdown from '@hooks/useDropdown';
import './TerminalDropdown.scss';

interface TerminalDropdownProps {
  options: string[];
  label: string;
}

const TerminalDropdown = ({ options, label }: TerminalDropdownProps) => {
  const { isOpen, selectedOption, toggleDropdown, handleOptionClick } =
    useDropdown(label);

  return (
    <div className="terminal-dropdown">
      <button
        type="button"
        className="terminal-dropdown__toggle"
        onClick={toggleDropdown}
      >
        {selectedOption || label}
        <span
          className={`terminal-dropdown__arrow ${isOpen ? 'terminal-dropdown__arrow--up' : 'terminal-dropdown__arrow--down'}`}
        />
      </button>
      {isOpen && (
        <ul className="terminal-dropdown__menu">
          {options.map(option => (
            <li className="terminal-dropdown__option" key={option}>
              <button
                type="button"
                onClick={() => handleOptionClick(option)}
                className="terminal-dropdown__option-button"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TerminalDropdown;
