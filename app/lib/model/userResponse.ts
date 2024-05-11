import { IPhoto } from './photo';

export interface IUserResponse {
  id: string;

  firstName: string;

  lastName: string;

  login: string;

  birthDate: Date;

  photos: IPhoto[];

  createDateTime: Date;

  expirationDate: Date;
}
