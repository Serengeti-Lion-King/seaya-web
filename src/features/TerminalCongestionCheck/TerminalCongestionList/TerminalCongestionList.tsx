import AnchorIcon from '@assets/anchor.svg?react';
import { useEffect, useState } from 'react';
import { getTerminalData, TerminalData } from '../terminalItems';
import './TerminalCongestionList.scss';

const TerminalCongestionList = () => {
  const [terminalData, setTerminalData] = useState<TerminalData[]>([]);

  useEffect(() => {
    // Mock API에서 데이터 가져오기
    const fetchData = async () => {
      try {
        const data = await getTerminalData();
        setTerminalData(data);
      } catch (error) {
        console.error('Error fetching terminal data:', error);
      }
    };

    fetchData();
  }, []);

  // 상태 클래스 결정 함수
  const getStatusClass = (status: string) => {
    switch (status) {
      case '혼잡':
        return 'status-busy';
      case '양호':
        return 'status-good';
      case '보통':
        return 'status-normal';
      default:
        return 'status-none';
    }
  };

  return (
    <div className="card-container">
      {terminalData.map(terminal => {
        const workStatusClass = getStatusClass(terminal.workStatus); // 작업 현황 클래스 결정
        const returnStatusClass = getStatusClass(terminal.returnStatus); // 반출입 현황 클래스 결정
        return (
          <div key={terminal.id} className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-name-wrapper">
                <AnchorIcon className="anchor-icon" />
                <div className="text-terminal">{terminal.name}</div>
              </div>
              <span className="text-time">{terminal.operationTime}</span>
            </div>
            <div className="terminal-body">
              <div className="card-label">
                <span className="text">본선작업현황</span>
                <div className="status-wrapper">
                  <span className="text text-status">
                    {terminal.workStatus}
                  </span>
                  <span className={`text badge ${workStatusClass}`}>
                    {terminal.workStatus === '-'
                      ? '-'
                      : `${terminal.gangs} Gang`}
                  </span>
                </div>
              </div>
              <div className="card-label">
                <span className="text">반출입현황</span>
                <div className="status-wrapper">
                  <span className="text text-status">
                    {terminal.returnStatus}
                  </span>
                  <span
                    className={`text badge ${returnStatusClass}`}
                  >{`${terminal.trucks} 대`}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TerminalCongestionList;
