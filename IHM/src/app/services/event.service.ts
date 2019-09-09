import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { EventHome } from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }
  getEvent() {
    return this.http.get<EventHome>("http://localhost:9090/events")
  }
}
