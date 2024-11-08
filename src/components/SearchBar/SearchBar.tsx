// SearchBar.tsx

import SearchIcon from '@assets/magnifierIcon.svg?react';
import '@styles/SearchBar.scss';

interface SearchBarProps {
  wrapperClassName?: string;
  inputFieldClassName?: string;
}

const SearchBar = ({
  wrapperClassName = '',
  inputFieldClassName = '',
}: SearchBarProps) => {
  return (
    <div className={`search-bar ${wrapperClassName}`}>
      <SearchIcon className="search-icon" />
      <input
        type="text"
        placeholder="컨테이너 번호 조회"
        className={`search-input ${inputFieldClassName}`}
      />
    </div>
  );
};

export default SearchBar;
