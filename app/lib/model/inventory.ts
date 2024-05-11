import { IStock } from './stock';

export interface IInventory {
  id: string;

  createDateTime: Date;

  stocks: IStock[];
}
