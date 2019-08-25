import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Actor } from '../../../../models/actor.model';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss']
})

export class ActorListComponent implements OnInit {

  actorList = [];
  actor: Actor = {} as Actor;
  category: Category = {} as Category;
  
  constructor( private http: HttpClient ) { }

  ngOnInit() {
    console.log(this.actorList)
    console.log(this.actor)
    console.log(this.category)
    this.getActor();
    console.log(this.actorList)
    console.log(this.actor)
  }


  // getActor(): void
  // {
  //   this.http.get<Actor>('http://localhost:9090/actor')
  //   // .pipe(map(data => data))
  //     .subscribe(
  //       (data: Actor)=>{
  //         data.forEach(actors => {
  //           this.actor.id = actors.id
  //           this.actor.name = actors.name;
  //           this.actor.geoLatitude = actors.geoLatitude
  //           this.actor.geoLongitude = actors.geoLongitude
  //           this.actor.adress = actors.adress
  //           this.actor.city = actors.city
  //           this.actor.cp = actors.cp
  //           this.actor.country = actors.country
  //           this.actor.website = actors.website
  //           this.actor.description = actors.description
  //           this.actor.telephonenumber = actors.telephonenumber
  //           this.actor.openhours = actors.openhours
  //           this.actor.image = actors.image
  //             actors.Categories.forEach(categoriesList =>{
  //               this.category.id = categoriesList.id
  //               this.category.name = categoriesList.name
  //               this.actor.categories = this.category
  //               this.actorList.push(this.actor)
  //             });
            
  //         });
          
  //       // console.log(this.actors)
  //       // console.log(this.actors[1].Categories[1].name)
  //       // console.log(this.actors[1])
  //       },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
