export interface Root {
  requests: Request[];
}

export interface Request {
  id: number;
  title: string;
  client: string;
  due: string;
  count?: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
  docs?: number;
}

export interface ListData {
  id: number;
  title: string;
}

export const LIST_DATA: ListData[] = [
  {
    id: 0,
    title: '도면개수',
  },
  {
    id: 1,
    title: '총 수량',
  },
  {
    id: 2,
    title: '가공방식',
  },
  {
    id: 3,
    title: '재료',
  },
];
