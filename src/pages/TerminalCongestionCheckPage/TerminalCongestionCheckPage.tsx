import NavigationBar from '@components/NavigationBar/NavigationBar';
import navItems from '@components/NavigationBar/navItems';
import PortDropdown from '@components/PortDropdown/PortDropdown';
import portOptions from '@components/PortDropdown/portOptions';
import TerminalCongestionList from '@features/TerminalCongestionCheck/TerminalCongestionList/TerminalCongestionList';
import { useState } from 'react';
import './TerminalCongestionCheckPage.scss';

const TerminalCongestionCheckPage = () => {
  const [selectedPort, setSelectedPort] = useState<string>(portOptions[0]); // 기본값으로 부산항 선택

  // PortDropdown에서 선택된 항구를 처리하는 함수
  const handlePortChange = (port: string) => {
    setSelectedPort(port); // 선택된 항구 설정
  };

  return (
    <>
      <NavigationBar navText={navItems[4]} />
      <div className="dropdown-container">
        <PortDropdown
          options={portOptions}
          onPortChange={handlePortChange} // 선택된 항구를 업데이트
        />
      </div>
      <TerminalCongestionList selectedPort={selectedPort} />
    </>
  );
};

export default TerminalCongestionCheckPage;
