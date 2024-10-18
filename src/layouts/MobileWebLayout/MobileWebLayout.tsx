import { Outlet } from 'react-router-dom';
import './MobileWebLayout.scss';

const MobileWebLayout = () => {
  return (
    <div className="mobile-web-container">
      <div className="mobile-web-view">
        <Outlet /> {/* 각 페이지가 이곳에 렌더링 됩니다. */}
      </div>
    </div>
  );
};

export default MobileWebLayout;
