// detailsData.ts

export interface DetailData {
  containerNumber: string;
  location: string;
  currentStep: number;
  ship: string;
  szTp: string;
  inTime: string;
  outTime: string | null;
  stayDuration: string | null;
  availability: string;
  status: string;
}

export const detailsData: DetailData[] = [
  {
    containerNumber: 'BMOU5586616',
    location: '부산98바1009',
    currentStep: 3,
    ship: 'MSC',
    szTp: '43DC (F)',
    inTime: '2023-09-16 15:53',
    outTime: '2023-09-16 17:05',
    stayDuration: '72분',
    availability: '반출 가능',
    status: '작업 완료',
  },
  {
    containerNumber: 'HLBU2049299',
    location: '경남99바7468',
    currentStep: 2,
    ship: 'HLC',
    szTp: '43DC (F)',
    inTime: '2023-10-20 01:49',
    outTime: null,
    stayDuration: null,
    availability: '반입 불가',
    status: '작업 중',
  },
  {
    containerNumber: 'CLHU3928833',
    location: '부산99바8791',
    currentStep: 1,
    ship: 'MSC',
    szTp: '20DC (F)',
    inTime: '2023-09-19 16:57',
    outTime: null,
    stayDuration: null,
    availability: '반입 불가',
    status: '작업 중',
  },
];
