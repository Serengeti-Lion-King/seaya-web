// ToolBar.tsx

import '@components/ToolBar/ToolBar.scss';
import { ReactComponent as HomeIcon } from '@assets/homeIcon.svg';
import { ReactComponent as SearchIcon } from '@assets/searchIcon.svg';
import { ReactComponent as MyIcon } from '@assets/myIcon.svg';

const ToolBar = () => {
  return (
    <div className="tool-bar">
      <span>
        <a href="/">
          <HomeIcon />
          <span>홈</span>
        </a>
      </span>
      <span>
        <a href="/">
          <SearchIcon />
          <span>NFT 조회</span>
        </a>
      </span>
      <span>
        <a href="/">
          <MyIcon />
          <span>MY</span>
        </a>
      </span>
    </div>
  );
};

export default ToolBar;
