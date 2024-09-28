// SeacrchBar.tsx

import SearchIcon from '@assets/search.svg?react';
import '@components/SearchBar/SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        placeholder="컨테이너 번호 조회"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
