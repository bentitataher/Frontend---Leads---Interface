import { Component, OnInit } from '@angular/core';
import { GestionUsersService } from '../../../../gestion-users.service'

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {

  constructor(
    private _gestionUserService: GestionUsersService
  ) { }

  users: any;

  ngOnInit(): void {
    this._gestionUserService.getAllUsers()
      .subscribe((user) => {
        this.users = user
        console.log("from Api ==> ", this.users);
      })
  }

}
