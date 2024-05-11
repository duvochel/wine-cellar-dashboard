export interface IStock {
  id: string;
  bottleId?: string;
  quantity: number;
  purchaseDate: Date;
  createDateTime: Date;
  position: string;
  owner: string;
  supplier: string;
  size: string;
  price: number;
  remainQuantity?: number;
}
