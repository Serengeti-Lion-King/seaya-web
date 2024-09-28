// terminalItems.ts
export interface TerminalData {
  id: string;
  name: string;
  operationTime: string;
  workStatus: string;
  gangs: number;
  returnStatus: string;
  trucks: number;
}

export const getTerminalData = async (): Promise<TerminalData[]> => {
  return [
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
  ];
};
