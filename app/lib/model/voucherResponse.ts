import { IDining } from './dining';
import { IDish } from './dish';

export interface IVoucherResponse {
  id: string;
  quantity: number;
  bottleId: string;
  bottleDomain: string;
  createdDateTime?: Date;
  recipient?: string;
  stockId: string;
  dining?: IDining;
  dish?: IDish;
}
