import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  add(actor: Actor): Observable<Actor> {
    console.log(actor);
    return this.http.post<Actor>("", actor)
  }
}
