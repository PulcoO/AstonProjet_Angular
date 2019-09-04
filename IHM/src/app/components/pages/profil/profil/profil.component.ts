import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../services/user.service";
import { AuthService } from '../../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../../models/user.model'
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  currentUser: User = {} as User

  constructor(private http: HttpClient, private UserService: UserService, private AuthService: AuthService) { }

  ngOnInit() {
    let id = JSON.parse(localStorage.getItem('id'));
    let url = "http://localhost:9090/user/" + id.id;

    this.UserService.getById(url).subscribe(
      (data: User) => {
        this.currentUser = data;
        console.log(this.currentUser)
        console.log('COUCOU', this.currentUser.firstname)
      },
      err => {
        console.log(err);
      }
    );

  }

}
