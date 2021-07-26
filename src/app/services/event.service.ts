import {conf} from '../config/conf';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from '../models/Event';

const EVENT_API = conf.host + 'api/event/';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  createEvent(event: Event): Observable<any> {
    return this.http.post(EVENT_API + 'create', event);
  }

  getAllEvents(): Observable<any> {
    return this.http.get(EVENT_API + 'all');
  }

}
