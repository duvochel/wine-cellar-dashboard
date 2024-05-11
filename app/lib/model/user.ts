export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  createDateTime: Date;
  expirationDate: Date;
  photosUrl: string[];
  inventoryId: string;
}
