import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(
    private _authenticationService: AuthenticationService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  resetPasswordForm = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  reset() {
    this.resetPasswordForm.value.token = this.route.snapshot.paramMap.get('token');
    let data = this.resetPasswordForm.value;
    this._authenticationService.resetPassword(data)
      .subscribe((reset) => {
        console.log(reset);
      })
  }

}
