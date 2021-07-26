import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../services/notification.service';
import {TicketService} from '../../services/ticket.service';
import {Ticket} from '../../models/Ticket';
import {Event} from '../../models/Event';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';
import {LoadTicketRequest} from '../../models/LoadTicketRequest';

@Component({
  selector: 'app-load-tickets',
  templateUrl: './load-tickets.component.html',
  styleUrls: ['./load-tickets.component.css']
})



export class LoadTicketsComponent implements OnInit {


  loadForm: FormGroup;
  loadForm2: FormGroup;
  loadForm3: FormGroup;
  formsCounter = 0;
  event: Event;
  tickets: Ticket [];
  ticket: Ticket;
  loadForm2Activated: boolean;
  loadForm3Activated: boolean;
  requests: LoadTicketRequest [];


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private ticketService: TicketService,
              private eventService: EventService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.loadForm = this.loadTicketsForm();
    this.loadForm2 = this.loadTicketsForm();
    this.loadForm3 = this.loadTicketsForm();
  }


  loadTicketsForm(): FormGroup {
    return this.formBuilder.group({
      basicInfo: ['', Validators.compose([Validators.required])],
      validationCode: ['', Validators.compose([Validators.required])],
      id: ['', Validators.compose([Validators.required])],
    });
  }


  submit(): void {
    if (this.formsCounter === 0) {
    this.ticketService.loadTickets([{
      basicInfo: this.loadForm.value.basicInfo,
      validationCode: this.loadForm.value.validationCode,
      eventId: this.loadForm.value.id}]).subscribe(() => {
      this.notificationService.showSnackBar('Ticket loaded');
      setTimeout(() => {
        this.navigateAndReload();
      }, 3000);
    }, error => {
      this.notificationService.showSnackBar('Something went wrong');
      setTimeout(() => {
        this.navigateAndReload();
      }, 3000);
    });
    }

    else if (this.formsCounter === 1) {
      this.ticketService.loadTickets([{
        basicInfo: this.loadForm.value.basicInfo,
        validationCode: this.loadForm.value.validationCode,
        eventId: this.loadForm.value.id}, {
        basicInfo: this.loadForm2.value.basicInfo,
        validationCode: this.loadForm2.value.validationCode,
        eventId: this.loadForm2.value.id}]).subscribe(() => {
        this.notificationService.showSnackBar('Two tickets loaded');
        setTimeout(() => {
          this.navigateAndReload();
        }, 3000);
      }, error => {
        this.notificationService.showSnackBar('Something went wrong');
        setTimeout(() => {
          this.navigateAndReload();
        }, 3000);
      });
    }
    else if (this.formsCounter === 2) {
      this.ticketService.loadTickets([{
        basicInfo: this.loadForm.value.basicInfo,
        validationCode: this.loadForm.value.validationCode,
        eventId: this.loadForm.value.id}, {
        basicInfo: this.loadForm2.value.basicInfo,
        validationCode: this.loadForm2.value.validationCode,
        eventId: this.loadForm2.value.id}, {
        basicInfo: this.loadForm3.value.basicInfo,
        validationCode: this.loadForm3.value.validationCode,
        eventId: this.loadForm3.value.id}]).subscribe(() => {
        this.notificationService.showSnackBar('Three tickets loaded');
        setTimeout(() => {
          this.navigateAndReload();
        }, 3000);
      }, error => {
        this.notificationService.showSnackBar('Something went wrong');
        setTimeout(() => {
          this.navigateAndReload();
        }, 3000);
      });
    }
  }

  navigateAndReload(): void {
    this.router.navigate(['/load-tickets'])
      .then(() => {
        window.location.reload();
      });
  }

  activateForm2(): void {
    this.loadForm2Activated = true;
    this.formsCounter += 1;
  }

  activateForm3(): void {
    this.loadForm3Activated = true;
    this.formsCounter += 1;
  }

}


