// ToolBar.tsx

import { Link } from 'react-router-dom';
import HomeIcon from '@assets/homeIcon.svg?react';
import SearchIcon from '@assets/searchIcon.svg?react';
import MyIcon from '@assets/myIcon.svg?react';
import '@styles/ToolBar.scss';

const ToolBar = () => {
  return (
    <ul className="tool-bar">
      <li className="toolbar-item">
        <Link to="/" className="toolbar-link">
          <HomeIcon className="toolbar-icon" />
          <span className="toolbar-text">홈</span>
        </Link>
      </li>
      <li className="toolbar-item">
        <Link to="/nft" className="toolbar-link">
          <SearchIcon className="toolbar-icon" />
          <span className="toolbar-text">NFT 조회</span>
        </Link>
      </li>
      <li className="toolbar-item">
        <Link to="/my" className="toolbar-link">
          <MyIcon className="toolbar-icon" />
          <span className="toolbar-text">MY</span>
        </Link>
      </li>
    </ul>
  );
};

export default ToolBar;
