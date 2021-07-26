import {Ticket} from './Ticket';

export interface Event {
  id?: number;
  basicInfo: string;
  location: string;
  timeOfEvent: Date;
  tickets?: Ticket [];
}
