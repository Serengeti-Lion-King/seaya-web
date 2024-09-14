import { useState } from 'react';
import './PortDropdown.scss';

interface PortDropdownProps {
  options: string[];
  label: string;
}

function PortDropdown({ options, label }: PortDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // 함수 타입 정의 추가
  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="port-dropdown">
      <button
        type="button"
        className="port-dropdown__toggle"
        onClick={toggleDropdown}
      >
        {selectedOption || label}
        <span
          className={`port-dropdown__arrow ${isOpen ? 'port-dropdown__arrow--up' : 'port-dropdown__arrow--down'}`}
        />
      </button>
      {isOpen && (
        <ul className="port-dropdown__menu">
          {options.map(option => (
            <li className="port-dropdown__option" key={option}>
              <button
                type="button"
                onClick={() => handleOptionClick(option)}
                className="port-dropdown__option-button"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PortDropdown;
