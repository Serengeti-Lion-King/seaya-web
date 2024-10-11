import { Outlet } from 'react-router-dom';
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Outlet /> {/* 각 페이지가 이곳에 렌더링 됩니다. */}
    </div>
  );
};

export default MainLayout;
