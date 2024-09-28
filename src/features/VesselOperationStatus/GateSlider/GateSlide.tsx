import { GateData } from '../gateItems';
import './GateSlide.scss';

interface GateSlideProps {
  gate: GateData;
}

const GateSlide = ({ gate }: GateSlideProps) => {
  return (
    <div className="slide">
      <h2>{gate.id}</h2>
      <p className="gateName">
        {gate.name} <span className="progress">{gate.progress}%</span>
      </p>
      <table className="infoTable">
        <tbody>
          <tr>
            <td>접안일시</td>
            <td>{gate.arrivalTime}</td>
          </tr>
          <tr>
            <td>출항일시</td>
            <td>{gate.departureTime}</td>
          </tr>
          <tr>
            <td>작업시작일시</td>
            <td>{gate.startTime}</td>
          </tr>
        </tbody>
      </table>
      <table className="workDetails">
        <thead>
          <tr>
            <th>작업구분</th>
            <th>Done</th>
            <th>Remaining</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {gate.workDetails.map(work => (
            <tr key={gate.id}>
              <td>{work.type}</td>
              <td>{work.done.toLocaleString()}</td>
              <td>{work.remaining.toLocaleString()}</td>
              <td>{work.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GateSlide;
