import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'about', component: ProfilComponent },
  { path: 'profil', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
