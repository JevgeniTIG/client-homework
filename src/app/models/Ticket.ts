import {Event} from './Event';

export interface Ticket {
  basicInformation: string;
  validationCode: string;
  status?: string;
  event?: Event;

}
