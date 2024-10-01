import './Timeline.scss';

interface TimelineProps {
  currentStep: number;
}

const steps = ['반입', '작업 중', '작업 완료'];

const Timeline = ({ currentStep }: TimelineProps) => {
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div
          className={`timeline-step ${currentStep >= index + 1 ? 'active' : ''}`}
        >
          <div className="step-indicator" />
          <span className="step-label">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
