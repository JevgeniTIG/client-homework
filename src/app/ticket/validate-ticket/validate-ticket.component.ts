import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../services/notification.service';
import {TicketService} from '../../services/ticket.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-validate-ticket',
  templateUrl: './validate-ticket.component.html',
  styleUrls: ['./validate-ticket.component.css']
})


export class ValidateTicketComponent implements OnInit {

  validateForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private ticketService: TicketService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.validateForm = this.createValidationForm();
  }


  createValidationForm(): FormGroup {
    return this.formBuilder.group({
      ticketId: ['', Validators.compose([Validators.required])]
    });
  }


  submit(): void {
    this.ticketService.validateTicket(this.validateForm.value.ticketId)
      .subscribe(() => {
        this.notificationService.showSnackBar('Ticket Validated');
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            this.notificationService.showSnackBar(err.error.substring(12, err.error.length - 2));
          }
          if (!this.validateForm.value.ticketId) {
            this.notificationService.showSnackBar('Something went wrong');
          }
          if (isNaN(this.validateForm.value.ticketId)) {
            this.notificationService.showSnackBar('Please input numeric value');
          }
          if (this.validateForm.value.ticketId <= 0) {
            this.notificationService.showSnackBar('Ticket ID must be positive number');
          }
        }
      });
  }


}


