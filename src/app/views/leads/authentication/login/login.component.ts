import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit(): void {}


  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  login(){
    this._authenticationService.login(this.loginForm.value)
        .subscribe((data)=>{
          console.log(data);
          
        })
  }

 }
