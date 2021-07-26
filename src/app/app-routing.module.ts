import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateNewEventComponent} from './event/create-new-event/create-new-event.component';
import {EventsOverviewComponent} from './event/events-overview/events-overview.component';
import {LoadTicketsComponent} from './ticket/load-tickets/load-tickets.component';
import {ValidateTicketComponent} from './ticket/validate-ticket/validate-ticket.component';

const routes: Routes = [
  {path: 'event', component: CreateNewEventComponent},
  {path: 'events-overview', component: EventsOverviewComponent},
  {path: 'validate-ticket', component: ValidateTicketComponent},
  {path: 'load-tickets', component: LoadTicketsComponent},
  {path: '', redirectTo: 'event', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
