export interface ICreateProduct {
  id: string;
  name: string;
  category: string;
  quantity: number;
  status?: string;
  created_at?: string;
  updated_at?: string;
  delete_at?: string;
}

export interface IUpdateProduct {
  name?: string;
  category?: string;
  quantity?: number;
}
