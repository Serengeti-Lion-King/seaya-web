// ToolBar.tsx

import HomeIcon from '@assets/homeIcon.svg?react';
import MyIcon from '@assets/myIcon.svg?react';
import SearchIcon from '@assets/searchIcon.svg?react';
import '@components/ToolBar/ToolBar.scss';

const ToolBar = () => {
  return (
    <div className="tool-bar">
      <span>
        <a href="/">
          <HomeIcon className="icon home-icon" />
          <span>홈</span>
        </a>
      </span>
      <span>
        <a href="/">
          <SearchIcon className="icon search-icon" />
          <span>NFT 조회</span>
        </a>
      </span>
      <span>
        <a href="/">
          <MyIcon className="icon my-icon" />
          <span>MY</span>
        </a>
      </span>
    </div>
  );
};

export default ToolBar;
