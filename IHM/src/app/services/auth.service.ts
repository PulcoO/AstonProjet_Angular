import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from '../services/server.service';



@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;
  private id: number;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private server: ServerService) {
    const userData = localStorage.getItem('token');

    if (userData) {
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);
    }
  }

  login(user) {
    if (user.email !== '' && user.password !== '') {
      return this.server.request('POST', '/user/login', {
        email: user.email,
        password: user.password
      })
        .subscribe((response: any) => {
          if (response !== undefined) {
            this.id = response.userId;
            this.token = response.token;
            this.server.setLoggedIn(true, this.token);
            this.loggedIn.next(true);
            const userData = {
              token: this.token
            };
            const userId = {
              id: this.id,
            }
            localStorage.setItem('token', JSON.stringify(userData));
            localStorage.setItem('id', JSON.stringify(userId));
            let id = JSON.parse(localStorage.getItem('id'));
            // console.log('COUCOU', id.id)
            this.router.navigateByUrl('/profil/' + id.id);
          }
        })
    }
  }

}
