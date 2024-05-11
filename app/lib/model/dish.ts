import { IPhoto } from './photo';

export interface IDish {
  id: string;
  name: string;
  isMeat: boolean;
  isFish: boolean;
  isSeafood: boolean;
  isVeggie: boolean;
  isDesert: boolean;
  photos: IPhoto[];
}
