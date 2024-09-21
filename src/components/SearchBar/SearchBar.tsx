import SearchIcon from '@assets/search.svg?react';
import '@components/SearchBar/SearchBar.scss';

function SearchBar() {
  return (
    <div className="search-bar">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        placeholder="컨테이너 번호 조회"
        // pattern="[A-Z]{4}[0-9]{7}"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
