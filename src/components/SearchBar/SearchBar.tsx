// SeacrchBar.tsx

import SearchIcon from '@assets/magnifierIcon.svg?react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-container">
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
