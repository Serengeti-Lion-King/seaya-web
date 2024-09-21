import TerminalCongestionCheckPage from '@pages/TerminalCongestionCheckPage';
import VesselOperationStatusPage from '@pages/VesselOperationStatusPage';
import './App.scss';

const App = () => {
  return (
    <div>
      <TerminalCongestionCheckPage />
      <VesselOperationStatusPage />
    </div>
  );
};

export default App;
