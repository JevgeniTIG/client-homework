import {conf} from '../config/conf';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadTicketRequest} from '../models/LoadTicketRequest';

const TICKET_API = conf.host + 'api/ticket/';

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  data: any;

  constructor(private http: HttpClient) {
  }

  getAllTickets(eventId: number): Observable<any> {
    return this.http.get(TICKET_API + eventId + '/all');
  }

  validateTicket(ticketId: number): Observable<any> {
    return this.http.put(TICKET_API + ticketId + '/validate', null,  {responseType: 'text'});
  }

  loadTickets(requests: LoadTicketRequest[]): Observable<any> {
    return this.http.post(TICKET_API + 'load', requests);
  }
}
