import ToolBar from '@components/ToolBar/ToolBar';
import { Outlet } from 'react-router-dom';
import './ServiceLayout.scss';

const ServiceLayout = () => {
  return (
    <div className="service-layout">
      <Outlet /> {/* 각 페이지가 이곳에 렌더링 됩니다. */}
      <ToolBar />
    </div>
  );
};

export default ServiceLayout;
