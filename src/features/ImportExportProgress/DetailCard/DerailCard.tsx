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
  const details = [
    { label: '선사', value: ship },
    { label: 'Sz/Tp (F/E)', value: szTp },
    { label: '반입 시간', value: inTime },
    { label: '반출 시간', value: outTime || '-' },
    { label: '체류 시간', value: stayDuration || '-' },
    {
      label: '반출 가능 여부',
      value: availability,
      className: `availability ${availability === '반출 가능' ? 'available' : 'not-available'}`,
    },
    { label: '상태', value: status, className: 'status' },
  ];

  return (
    <div className="detail-card">
      {details.map(detail => (
        <div key={detail.label} className="detail-item">
          <span className="label">{detail.label}</span>
          <span className={`value ${detail.className || ''}`}>
            {detail.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DetailCard;
