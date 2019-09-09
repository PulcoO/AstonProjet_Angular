import { Component, OnInit } from '@angular/core';
import { EventHome } from '../../../models/event.model';
import { Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  events: EventHome = {} as EventHome;

  constructor(private http: HttpClient, private EventService: EventService) { }


  ngOnInit() {
    this.EventService.getEvent().subscribe((data: EventHome) => {
      this.events = data;
      console.log(this.events[0].title)
    },
      err => {
        console.log(err);
      }
    )
  }

}
