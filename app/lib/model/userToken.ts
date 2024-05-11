import { IUser } from './user';

export interface IUserToken {
  token: string;
  user: IUser;
}
