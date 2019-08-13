import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})
export class ActorListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

<<<<<<< Updated upstream
=======
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
  
>>>>>>> Stashed changes
}
