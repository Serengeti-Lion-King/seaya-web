import AnchorIcon from '@assets/anchor.svg?react';
import { useEffect, useState } from 'react';
import { getTerminalData, TerminalData } from '../terminalItems';
import './TerminalCongestionList.scss';

interface TerminalCongestionListProps {
  selectedPort: string; // 선택된 항구 이름
}

const TerminalCongestionList = ({
  selectedPort,
}: TerminalCongestionListProps) => {
  const [terminalData, setTerminalData] = useState<TerminalData[]>([]); // 선택된 항구의 터미널 데이터
  const [loading, setLoading] = useState<boolean>(true); // 데이터 로딩 상태

  // 선택된 항구에 따른 데이터 fetch
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 데이터를 가져오는 동안 로딩 상태로 설정
      try {
        const data = await getTerminalData(); // 모든 항구 데이터 가져오기
        const portData = data.find(item => item.port === selectedPort); // 선택된 항구의 데이터 필터링
        setTerminalData(portData ? portData.terminals : []); // 해당 항구의 터미널 데이터 설정
      } catch (error) {
        console.error('Error fetching terminal data:', error);
      } finally {
        setLoading(false); // 데이터 가져오기 완료 후 로딩 상태 해제
      }
    };

    fetchData(); // 항구가 변경될 때마다 데이터를 fetch
  }, [selectedPort]); // selectedPort가 변경될 때마다 실행

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

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return <p>Loading terminal data...</p>;
  }

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
