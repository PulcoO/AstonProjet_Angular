import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularWebStorageModule } from 'angular-web-storage'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { IndexComponent } from './components/pages/index/index.component';
import { MapComponent } from './components/pages/map/map.component';
import { HttpClientModule } from '@angular/common/http';

import { ActorDetailComponent } from './components/pages/actor/actor-detail/actor-detail.component';
import { ActorListComponent } from './components/pages/actor/actor-list/actor-list.component';
import { RechercheComponent } from './components/pages/recherche/recherche.component';
import { FavorisComponent } from './components/layout/buttons/favoris/favoris.component';
import { ReturnMapComponent } from './components/layout/buttons/return-map/return-map.component';
import { ReturnListComponent } from './components/layout/buttons/return-list/return-list.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidenavMapComponent } from './components/layout/sidenav-map/sidenav-map.component';
import { ReadMoreComponent } from './components/layout/buttons/read-more/read-more.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    MapComponent,
    ActorDetailComponent,
    ActorListComponent,
    RechercheComponent,
    FavorisComponent,
    ReturnMapComponent,
    ReturnListComponent,
    FooterComponent,
    SidenavMapComponent,
    ReadMoreComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularWebStorageModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
