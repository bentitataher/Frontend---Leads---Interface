import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void { }


  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  login() {
    this._authenticationService.login(this.loginForm.value)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        this.router.navigate(['dashboard'])
      })
  }

}
