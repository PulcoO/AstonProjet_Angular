import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { MapComponent } from './components/pages/map/map.component';
import { ActorListComponent } from './components/pages/actor/actor-list/actor-list.component';
import { ActorDetailComponent } from './components/pages/actor/actor-detail/actor-detail.component';


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'map', component: MapComponent},
  { path: 'actorList', component: ActorListComponent},
  { path: 'actorDetail', component: ActorDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
