import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Actor } from '../../../../models/actor.model';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})

export class ActorListComponent implements OnInit {

  actor: Actor = {} as Actor;
  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getActor();
  }
  getActor(): void
  {
    this.http.get<Actor>('http://localhost:9090/actor')
    .pipe(map(data => data))
      .subscribe(
        (actor: Actor)=>{
        this.actor = actor;
        console.log(actor)
      },
      err => {
        console.log(err);
      }
    );
  }
}
