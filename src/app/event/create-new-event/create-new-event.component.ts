import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Event} from '../../models/Event';
import {EventService} from '../../services/event.service';
import {NotificationService} from '../../services/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-new-event',
  templateUrl: './create-new-event.component.html',
  styleUrls: ['./create-new-event.component.css']
})

export class CreateNewEventComponent implements OnInit {

  createdEvent: Event;
  eventForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private eventService: EventService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.eventForm = this.createEventForm();
  }


  createEventForm(): FormGroup {
    return this.formBuilder.group({
      basicInfo: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      timeOfEvent: ['', Validators.compose([Validators.required])],
    });
  }

  submit(): void {
    this.eventService.createEvent({
      basicInfo: this.eventForm.value.basicInfo,
      location: this.eventForm.value.location,
      timeOfEvent: this.eventForm.value.timeOfEvent,
    }).subscribe(data => {
      this.createdEvent = data;
      console.log(data);
      this.notificationService.showSnackBar('Event created');
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

  navigateAndReload(): void {
    this.router.navigate(['/event'])
      .then(() => {
        window.location.reload();
      });
  }


}


