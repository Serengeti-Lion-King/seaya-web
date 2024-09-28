// ToolBar.tsx

import './ToolBar.scss';
import { Link } from 'react-router-dom';
import HomeIcon from '@assets/homeIcon.svg?react';
import MyIcon from '@assets/myIcon.svg?react';
import SearchIcon from '@assets/searchIcon.svg?react';

const ToolBar = () => {
  return (
    <div className="tool-bar">
      <span>
        <Link to="/">
          <HomeIcon className="icon home-icon" />
          <span>홈</span>
        </Link>
      </span>
      <span>
        <Link to="/">
          <SearchIcon className="icon search-icon" />
          <span>NFT 조회</span>
        </Link>
      </span>
      <span>
        <Link to="/">
          <MyIcon className="icon my-icon" />
          <span>MY</span>
        </Link>
      </span>
    </div>
  );
};

export default ToolBar;
