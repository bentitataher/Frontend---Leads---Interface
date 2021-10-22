import { Component, OnInit } from '@angular/core';
import { GestionUsersService } from '../../../../gestion-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {

  constructor(
    private _gestionUserService: GestionUsersService,
    private router: Router
  ) { }

  users: any;

  ngOnInit(): void {
    this._gestionUserService.getAllUsers()
      .subscribe((user) => {
        this.users = user
        console.log("from Api ==> ", this.users);
      })
  }

  versAjouter() {
    this.router.navigate(['ajout-user'])
  }

  edit(i){
    this.router.navigate(['/modification-user', this.users[i]._id])
  }

  delete(i){
    this._gestionUserService.deleteUser(this.users[i]._id)
    .subscribe((userDeleted)=>{
      console.log(userDeleted);
      this.ngOnInit();
    })
  }

}
