// TrackingStatus.tsx

import DetailCard from '../DetailCard/DetailCard';
import { detailsData } from '../detailData';
import Timeline from '../Timeline/Timeline';
import './TrackingStatus.scss';

const TrackingStatus = () => {
  return (
    <div className="tracking-status">
      {detailsData.map(detail => (
        <div key={detail.containerNumber} className="tracking-status-item">
          <h3 className="container-info">
            {detail.containerNumber} ({detail.location})
          </h3>
          <Timeline currentStep={detail.currentStep} />
          <DetailCard
            ship={detail.ship}
            szTp={detail.szTp}
            inTime={detail.inTime}
            outTime={detail.outTime}
            stayDuration={detail.stayDuration}
            availability={detail.availability}
            status={detail.status}
          />
        </div>
      ))}
    </div>
  );
};

export default TrackingStatus;
