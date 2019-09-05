import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Favoris } from "../models/favoris.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  add(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>("http://localhost:9090/user/create", user)
  }

  getById(url) {
    return this.http.get<User>(url)
  }

  getFavoris(urlFav) {
    return this.http.get<Favoris>(urlFav)
  }


  update(user: User) {
    return this.http.put(`/user/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`/user/` + id);
  }
}
