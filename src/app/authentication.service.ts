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

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  // API : Forget password (envoi du mail)
  forgetPassword(mail){
    return this.http.post("http://localhost:4000/authentication/password-forget", mail)
  }

  // API : Reset password (Par Token)
  resetPassword(data){
    return this.http.post("http://localhost:4000/authentication/password-reset", data)
  }

}

