import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  Event :Event
  constructor(private http : HttpClient) { }

  addEvent(Event :Event){
    return this.http.post("http://localhost:8080/addEvent",Event)
  }
}
