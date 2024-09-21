import { useState } from 'react';

const useDropdown = (initialLabel: string) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const resetDropdown = (): void => {
    setSelectedOption(initialLabel);
  };

  return {
    isOpen,
    selectedOption,
    toggleDropdown,
    handleOptionClick,
    resetDropdown,
  };
};

export default useDropdown;
