import { User } from './user.model';

export interface Offre {
  id: number;
  titre: string;
  description: string;
  missions: string;
  competences: string;
  filiereCible: string;
  niveauCible: string;
  lieu: string;
  dateDebut: string;
  dateFin: string;
  entreprise: User;
}
