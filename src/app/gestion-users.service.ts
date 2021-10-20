import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GestionUsersService {

  constructor(
    private http: HttpClient
  ) { }

  // get all users
  getAllUsers() {
    return this.http.get("http://localhost:4000/gestion-users")
  }

}
