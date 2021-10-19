import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  constructor(
    private http: HttpClient
  ) { }

// Ajouter un secteur
ajout(data){
  return this.http.post("http://localhost:4000/secteur", data)
}



}


