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
