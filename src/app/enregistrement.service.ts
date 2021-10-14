import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EnregistrementService {

  constructor(private http: HttpClient) { }

  //API : Ajout enregistrement
  ajout(enregistrement) {
    return this.http.post("http://localhost:4000/enregistrement/ajout", enregistrement)
  }

}
