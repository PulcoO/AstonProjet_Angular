import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { IndexComponent } from './components/pages/index/index.component';
import { MapComponent } from './components/pages/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import { ActorDetailComponent } from './components/pages/actor/actor-detail/actor-detail.component';
import { ActorListComponent } from './components/pages/actor/actor-list/actor-list.component';
import { RechercheComponent } from './components/pages/recherche/recherche.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    MapComponent,
    ActorDetailComponent,
    ActorListComponent,
    RechercheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
