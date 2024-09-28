// MainPage.tsx

// MainPage.tsx

import ToolBar from '@components/ToolBar/ToolBar';
import SearchBar from '@components/SearchBar/SearchBar';
import MainBar from '@components/MainBar/MainBar';
import mainPoster from '@assets/mainPoster.png';
import TruckIcon from '@assets/truckIcon.svg?react';
import GateIcon from '@assets/gateIcon.svg?react';
import ShipIcon from '@assets/shipIcon.svg?react';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div>
      <MainBar />
      <SearchBar />
      <img src={mainPoster} alt="example" className="main-poster" />
      <div className="wrap">
        <div className="card">
          <span className="title">본선작업현황</span>
          <TruckIcon className="button-icon" />
        </div>
        <div className="card">
          <span className="title">반출입현황</span>
          <ShipIcon className="button-icon" />
        </div>
        <div className="card">
          <span className="title">터미널혼잡도</span>
          <GateIcon className="button-icon" />
        </div>
      </div>
      <ToolBar />
    </div>
  );
};

export default MainPage;
