// SeacrchBar.tsx

import SearchIcon from '@assets/magnifierIcon.svg?react';
import './SearchBar.scss';

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className = '' }: SearchBarProps) => {
  return (
    <div className={`search-container ${className}`}>
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="컨테이너 번호 조회"
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchBar;
