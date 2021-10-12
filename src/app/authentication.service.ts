import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  //API : Inscription
  inscription(user) {
    return this.http.post("http://localhost:4000/authentication/signup", user)
  }

  // API : Login
  login(data){
    return this.http.post("http://localhost:4000/authentication/login", data)
  }


}

