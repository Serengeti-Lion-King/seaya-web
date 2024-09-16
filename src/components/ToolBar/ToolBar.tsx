import '@components/ToolBar/ToolBar.scss';
import HomeIcon from '@assets/homeIcon.svg?react';
import SearchIcon from '@assets/searchIcon.svg?react';
import MyIcon from '@assets/myIcon.svg?react';

function ToolBar() {
  return (
    <div className="toolbar">
      <span>
        <a href="#">
          <HomeIcon />
          <span>홈</span>
        </a>
      </span>
      <span>
        <a href="#">
          <SearchIcon />
          <span>NFT 조회</span>
        </a>
      </span>
      <span>
        <a href="#">
          <MyIcon />
          <span>MY</span>
        </a>
      </span>
    </div>
  );
}

export default ToolBar;
