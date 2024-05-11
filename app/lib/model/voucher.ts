import { IStock } from './stock';
import { IDining } from './dining';
import { IDish } from './dish';

export interface IVoucher {
  id?: string;
  stockId: string;
  quantity: number;
  createdDateTime?: Date;
  recipient?: string;
  stock?: IStock;
  dining?: IDining;
  dish?: IDish;
}
