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

  return (
    <div className="terminal-container">
      {terminalData.map(terminal => (
        <div key={terminal.id} className="terminal-card">
          <div className="terminal-header">
            <AnchorIcon />
            <div className="terminal-name">{terminal.name}</div>
            <div className="terminal-time">{terminal.operationTime}</div>
          </div>
          <div className="terminal-body">
            <div className="work-status">
              <span>본선작업현황</span>
              <span
                className={`status ${
                  terminal.workStatus === '혼잡'
                    ? 'status-busy'
                    : 'status-normal'
                }`}
              >
                {terminal.workStatus === '-' ? '-' : `${terminal.gangs} Gang`}
              </span>
            </div>
            <div className="return-status">
              <span>반출입현황</span>
              <span className="trucks">{`${terminal.trucks} 대`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TerminalCongestionList;
