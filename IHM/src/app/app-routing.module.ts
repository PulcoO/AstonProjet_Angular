import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { MapComponent } from './components/pages/map/map.component';
import { ActorListComponent } from './components/pages/actor/actor-list/actor-list.component';
import { ActorDetailComponent } from './components/pages/actor/actor-detail/actor-detail.component';
import { LoginComponent } from './components/pages/profil/login/login.component';
import { RegisterComponent } from './components/pages/profil/register/register.component';
import { ProfilComponent } from './components/pages/profil/profil/profil.component';
import { ModaleventComponent } from './components/layout/event/modalevent/modalevent.component';
import { AddactorComponent } from './components/pages/actor/addactor/addactor.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'map', component: MapComponent },
  { path: 'actorList', component: ActorListComponent },
  { path: 'actor/:actorId', component: ActorDetailComponent },
  { path: 'profil/:userId', component: ProfilComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "event", component: ModaleventComponent },
  { path: "addActor", component: AddactorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } //debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
