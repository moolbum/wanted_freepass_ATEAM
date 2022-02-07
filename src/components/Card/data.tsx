interface ListData {
  id: number;
  title: string;
  info: string;
}

interface List {
  [index: number]: ListData;
}

export const LIST_DATA: List[] = [
  {
    id: 0,
    title: '도면개수',
    info: '1개',
  },
  {
    id: 1,
    title: '총 수량',
    info: '100개',
  },
  {
    id: 2,
    title: '가공방식',
    info: '선반',
  },
  {
    id: 3,
    title: '재료',
    info: '탄소강,강철',
  },
];
