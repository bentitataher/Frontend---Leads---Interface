import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  // Inscription
  inscription(user) {
    return this.http.post("http://localhost:4000/authentication/signup", user)
  }


}

