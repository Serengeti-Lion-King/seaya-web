export interface WorkDetail {
  type: string;
  done: number;
  remaining: number;
  total: number;
}

export interface GateData {
  id: string;
  shippingCompany: string;
  shipName: string;
  arrivalTime: string;
  departureTime: string;
  startTime: string;
  progress: number;
  workDetails: WorkDetail[];
}

// 게이트 데이터 정의
export const getGateData = async (): Promise<GateData[]> => {
  return [
    {
      id: 'T1',
      shippingCompany: 'MBAS010',
      shipName: 'MSC BASEL V(MSC)',
      arrivalTime: '2024-07-10 05:00',
      departureTime: '2024-07-11 04:00',
      startTime: '2024-07-11 04:00',
      progress: 91,
      workDetails: [
        { type: '양하', done: 1221, remaining: 0, total: 1221 },
        { type: '적하', done: 809, remaining: 200, total: 1009 },
      ],
    },
    {
      id: 'T2',
      shippingCompany: 'ODOA004',
      shipName: 'RDO ACE(ONE)',
      arrivalTime: '2024-07-12 10:00',
      departureTime: '2024-07-14 03:00',
      startTime: '2024-07-12 11:48',
      progress: 100,
      workDetails: [
        { type: '양하', done: 1553, remaining: 0, total: 1553 },
        { type: '적하', done: 2050, remaining: 0, total: 2050 },
      ],
    },
    {
      id: 'T3',
      shippingCompany: 'MFIT002',
      shipName: 'MSC FAITH(MSC)',
      arrivalTime: '2024-07-13 17:00',
      departureTime: '2024-07-15 11:00',
      startTime: '2024-07-15 11:00',
      progress: 10,
      workDetails: [
        { type: '양하', done: 370, remaining: 926, total: 1296 },
        { type: '적하', done: 0, remaining: 1664, total: 1664 },
      ],
    },
  ];
};
