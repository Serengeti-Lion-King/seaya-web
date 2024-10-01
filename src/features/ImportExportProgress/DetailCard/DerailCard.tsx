import './DetailCard.scss';

interface DetailCardProps {
  ship: string;
  szTp: string;
  inTime: string;
  outTime: string | null;
  stayDuration: string | null;
  availability: string;
  status: string;
}

const DetailCard = ({
  ship,
  szTp,
  inTime,
  outTime,
  stayDuration,
  availability,
  status,
}: DetailCardProps) => {
  return (
    <div className="detail-card">
      <div className="detail-item">
        <span className="label">선사</span>
        <span className="value">{ship}</span>
      </div>
      <div className="detail-item">
        <span className="label">Sz/Tp (F/E)</span>
        <span className="value">{szTp}</span>
      </div>
      <div className="detail-item">
        <span className="label">반입 시간</span>
        <span className="value">{inTime}</span>
      </div>
      <div className="detail-item">
        <span className="label">반출 시간</span>
        <span className="value">{outTime || '-'}</span>
      </div>
      <div className="detail-item">
        <span className="label">체류 시간</span>
        <span className="value">{stayDuration || '-'}</span>
      </div>
      <div className="detail-item">
        <span className="label">반출 가능 여부</span>
        <span
          className={`value availability ${availability === '반출 가능' ? 'available' : 'not-available'}`}
        >
          {availability}
        </span>
      </div>
      <div className="detail-item">
        <span className="label">반출 가능 여부</span>
        <span className="value status">{status}</span>
      </div>
    </div>
  );
};

export default DetailCard;
