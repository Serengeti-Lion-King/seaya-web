// MainPage.tsx

import { Link } from 'react-router-dom';
import ToolBar from '@components/ToolBar/ToolBar';
import SearchBar from '@components/SearchBar/SearchBar';
import MainBar from '@components/MainBar/MainBar';
import mainPoster from '@assets/mainPoster.png';
import TruckIcon from '@assets/truckIcon.svg?react';
import GateIcon from '@assets/gateIcon.svg?react';
import ShipIcon from '@assets/shipIcon.svg?react';
import './MainPage.scss';

const MainPage = () => {
  const handleClick = () => {
    console.log('로그인 버튼 클릭됨');
  };

  return (
    <div>
      <MainBar />
      <SearchBar />
      <img src={mainPoster} alt="example" className="main-poster" />
      <div className="shortcut-list">
        <Link to="/vessel-operation-status-page" className="shortcut-item">
          <span className="service-name">본선작업현황</span>
          <TruckIcon className="shortcut-icon type-vessel" />
        </Link>
        <Link to="/" className="shortcut-item">
          <span className="service-name">반출입현황</span>
          <ShipIcon className="shortcut-icon type-import" />
        </Link>
        <Link to="/terminal-congestion-check-page" className="shortcut-item">
          <span className="service-name">터미널혼잡도</span>
          <GateIcon className="shortcut-icon type-terminal" />
        </Link>
      </div>
      <ToolBar />
    </div>
  );
};

export default MainPage;
