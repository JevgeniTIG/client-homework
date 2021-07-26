import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {CreateNewEventComponent} from './event/create-new-event/create-new-event.component';
import {SideNavigationComponent} from './layout/navigation/side-navigation.component';
import {EventsOverviewComponent} from './event/events-overview/events-overview.component';
import {LoadTicketsComponent} from './ticket/load-tickets/load-tickets.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ValidateTicketComponent} from './ticket/validate-ticket/validate-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewEventComponent,
    EventsOverviewComponent,
    LoadTicketsComponent,
    SideNavigationComponent,
    ValidateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
