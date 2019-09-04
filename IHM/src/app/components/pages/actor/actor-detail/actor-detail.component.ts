import { Component, OnInit } from '@angular/core';
import { Actor } from '../../../../models/actor.model';
import { Category } from '../../../../models/category.model';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {
  actor: Actor = {} as Actor;
  categories: Category = {} as Category;
  image;
  constructor(private http: HttpClient,private route: ActivatedRoute) { 
    // this.route.params.subscribe( params => console.log(params) )
    this.route.params.subscribe( params => {
      let actorId = params.actorId;
      let url = 'http://localhost:9090/actor/' + actorId;
      this.getActor(url);
      
    })
  }

  ngOnInit() {
  }

  getActor(url): void
  {
    this.http.get<Actor>(url)
    // .pipe(map(data => data))
      .subscribe(
        (data: Actor)=>{
          this.actor = data;
          this.image = this.actor.image;
          console.log(this.image);
          console.log(this.actor)
          
           //console.log(this.actor)
        },
      err => {
        console.log(err);
      }
    );
  }
}

