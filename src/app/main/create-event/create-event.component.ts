import { Component, OnInit } from '@angular/core';
import { EventService } from 'app/Service/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})




export class CreateEventComponent {

  event: Event 

  constructor( private eventService: EventService) {}

  saveForm() {
    console.log('Form data saved.');
  }

  cancelForm() {
    console.log('Form canceled.');
  }

  addCollaboration() {
    console.log(this.event);
    
    this.eventService.addEvent(this.event).subscribe(
      ev => {
        console.log(ev);
        window.alert('Event added successfully');
      },
      error => {
        console.log(error);
        window.alert('Error in adding Event');
      }
    );
  }

}




/*export class CreateEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
