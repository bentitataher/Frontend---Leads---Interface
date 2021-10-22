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
  // Get One user
  getOneUser(id) {
    return this.http.get("http://localhost:4000/gestion-users/" + id)
  }

  // Ajout utilisateur
  ajoutUserAdmin(newUser) {
    return this.http.post("http://localhost:4000/gestion-users/signup", newUser)
  }

   // Supprimer secteur
   deleteUser(id){
    return this.http.delete("http://localhost:4000/gestion-users/"+ id)
  }

}
