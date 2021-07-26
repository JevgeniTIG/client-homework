import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {TicketService} from '../../services/ticket.service';
import {Ticket} from '../../models/Ticket';
import {Event} from '../../models/Event';

@Component({
  selector: 'app-events-overview',
  templateUrl: './events-overview.component.html',
  styleUrls: ['./events-overview.component.css']
})


export class EventsOverviewComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService,
              private ticketService: TicketService
  ) {
  }

  ngOnInit(): void {

    this.eventService.getAllEvents().subscribe(data => {
      this.events = data;
      this.getTickets(this.events);
    });
  }


  getTickets(events: Event[]): void {
    events.forEach(e => {
      this.ticketService.getAllTickets(e.id)
        .subscribe(data => {
          e.tickets = data;
        });
    });
  }

}


