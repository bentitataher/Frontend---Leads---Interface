import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GestionUsersService } from '../../../../gestion-users.service';

@Component({
  selector: 'app-modification-user',
  templateUrl: './modification-user.component.html',
  styleUrls: ['./modification-user.component.css']
})
export class ModificationUserComponent implements OnInit {

  constructor(
    private _gestionUserService: GestionUsersService,
    private route: ActivatedRoute,
  ) { }

  modificationUserForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    statut: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this._gestionUserService.getOneUser(id)
      .subscribe((userGetted) => {
        this.modificationUserForm.patchValue(userGetted);
        console.log(userGetted);
      })
  }

  valider() {
    let id = this.route.snapshot.paramMap.get('id');
    let data = this.modificationUserForm.value;

    this._gestionUserService.editUser(id, data)
      .subscribe((userUpdated) => {
        console.log(userUpdated);
      })
  }


}
