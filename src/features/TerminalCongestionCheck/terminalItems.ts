/**
 * TODO: 추후에 드롭다운이 선택된 경우에 울산항 fetch하도록 수정.
 */

export interface TerminalData {
  id: string;
  name: string;
  operationTime: string;
  workStatus: string;
  gangs: number;
  returnStatus: string;
  trucks: number;
}

export interface PortData {
  port: string;
  terminals: TerminalData[];
}

export const getTerminalData = async (): Promise<PortData[]> => {
  return [
    // 부산항 데이터
    {
      port: '부산항',
      terminals: [
        {
          id: 'PNIT',
          name: 'PNIT',
          operationTime: '2024.07.10 23:48',
          workStatus: '혼잡',
          gangs: 28,
          returnStatus: '양호',
          trucks: 13,
        },
        {
          id: 'PNC',
          name: 'PNC',
          operationTime: '2024.07.10 01:08',
          workStatus: '보통',
          gangs: 6,
          returnStatus: '-',
          trucks: 13,
        },
        {
          id: 'HJNC',
          name: 'HJNC',
          operationTime: '2024.07.10 23:48',
          workStatus: '보통',
          gangs: 9,
          returnStatus: '양호',
          trucks: 9,
        },
        {
          id: 'HPNT',
          name: 'HPNT',
          operationTime: '2024.07.10 01:08',
          workStatus: '-',
          gangs: 3,
          returnStatus: '양호',
          trucks: 13,
        },
        {
          id: 'BNCT',
          name: 'BNCT',
          operationTime: '2024.07.10 23:48',
          workStatus: '보통',
          gangs: 8,
          returnStatus: '양호',
          trucks: 3,
        },
        {
          id: 'BCT',
          name: 'BCT',
          operationTime: '2024.07.10 01:08',
          workStatus: '보통',
          gangs: 6,
          returnStatus: '양호',
          trucks: 24,
        },
      ],
    },
    // 울산항 데이터
    {
      port: '울산항',
      terminals: [
        {
          id: 'SNCT',
          name: 'SNCT',
          operationTime: '2024.07.10 23:48',
          workStatus: '-',
          gangs: 1,
          returnStatus: '양호',
          trucks: 0,
        },
        {
          id: 'HJIT',
          name: 'HJIT',
          operationTime: '2024.07.10 01:08',
          workStatus: '양호',
          gangs: 5,
          returnStatus: '양호',
          trucks: 1,
        },
        {
          id: 'E1CT',
          name: 'E1CT',
          operationTime: '2024.07.10 23:48',
          workStatus: '-',
          gangs: 0,
          returnStatus: '양호',
          trucks: 0,
        },
        {
          id: 'ICT',
          name: 'ICT',
          operationTime: '2024.07.10 01:08',
          workStatus: '혼잡',
          gangs: 2,
          returnStatus: '혼잡',
          trucks: 0,
        },
      ],
    },
  ];
};
