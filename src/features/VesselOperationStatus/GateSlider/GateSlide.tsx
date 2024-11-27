import ArrowLeftIcon from '@assets/chevron_left.svg?react';
import { GateData } from '../gateItems';
import './GateSlide.scss';

interface CSSCustomProperties extends React.CSSProperties {
  '--progress'?: string; // '--progress'라는 커스텀 속성을 추가
}

interface GateSlideProps {
  gate: GateData;
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

const GateSlide = ({ gate, onPrevSlide, onNextSlide }: GateSlideProps) => {
  return (
    <div className="slide">
      {/* Gate Header */}
      <div className="gate-header-container">
        <div className="gate-header">
          <button
            type="button"
            onClick={onPrevSlide}
            className="arrow-button"
            aria-label="Previous slide" // 접근성 레이블 추가
          >
            <ArrowLeftIcon className="arrow-icon arrow-icon--left" />
          </button>
          <h2>{gate.id}</h2>
          <button
            type="button"
            onClick={onNextSlide}
            className="arrow-button"
            aria-label="Next slide" // 접근성 레이블 추가
          >
            <ArrowLeftIcon className="arrow-icon arrow-icon--right" />
          </button>
        </div>
      </div>
      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ '--progress': `${gate.progress}%` } as CSSCustomProperties} // CSS 변수로 진행률 동적 설정
        />
      </div>

      <div className="gate-info">
        <div>
          <p>{gate.shippingCompany}</p>
          <p>{gate.shipName}</p>
        </div>
        <span>{gate.progress}%</span>
      </div>

      <div className="schedule-grid">
        <div className="label">접안일시</div>
        <div>{gate.arrivalTime}</div>
        <div className="label">출항일시</div>
        <div>{gate.departureTime}</div>
        <div className="label">작업시작일시</div>
        <div>{gate.startTime}</div>
      </div>

      <div className="work-grid">
        <div className="label">작업구분</div>
        <div className="label">Done</div>
        <div className="label">Remaining</div>
        <div className="label">Total</div>
        {gate.workDetails.map(work => (
          <>
            <div className="workType">{work.type}</div>
            <div>{work.done.toLocaleString()}</div>
            <div>{work.remaining.toLocaleString()}</div>
            <div>{work.total.toLocaleString()}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default GateSlide;
