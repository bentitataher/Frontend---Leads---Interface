import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../../../authentication.service'

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.css']
})
export class PasswordForgetComponent implements OnInit {

  constructor(private _authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  forgetPasswordForm = new FormGroup({
    email: new FormControl(''),
  })
  
  forgetPass(){
    this._authenticationService.forgetPassword(this.forgetPasswordForm.value)
        .subscribe((mail)=>{
          console.log(mail);
          
        })
  }

}
