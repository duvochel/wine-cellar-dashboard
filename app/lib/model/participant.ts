import { IParticipation } from './participation';

export interface IParticipant {
  id: string;

  firstName: string;

  lastName: string;

  birthDate: Date;

  participations: IParticipation[];
}
