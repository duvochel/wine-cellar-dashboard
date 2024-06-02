import { IPhoto } from './photo';
import { IStock } from './stock';

export type BottleForm = {
  id: string;
  domain: string;
  color: string;
  region: string;
  appellation: string;
  vintage: number;
  label: string;
  readyYear: number;
  plateauStartYear: number;
  plateauEndYear: number;
  expirationYear: number;
  expirationString?: string;
  comment: string;
  url: string;
  quantityInStock: number;
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
};