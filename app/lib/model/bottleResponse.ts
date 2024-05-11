import { IPhoto } from './photo';
import { IStock } from './stock';

export interface IBottleResponse {
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
  photos: IPhoto[];
  quantityInStock: number;
  stocks: IStock[];
}
