import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GestionUsersService } from '../../../../gestion-users.service';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css']
})
export class AjoutUserComponent implements OnInit {

  constructor(
    private _gestionUserService: GestionUsersService
  ) { }

  ajoutUserForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    statut: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
  }

  valider() {
    let data = this.ajoutUserForm.value;
    this._gestionUserService.ajoutUserAdmin(data)
      .subscribe((user) => {
        console.log(user);
      })
  }

}
