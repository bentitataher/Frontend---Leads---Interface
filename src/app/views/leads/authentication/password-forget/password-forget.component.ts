import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.component.html',
  styleUrls: ['./password-forget.component.css']
})
export class PasswordForgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  forgetPasswordForm = new FormGroup({
    email: new FormControl(''),
  })
  
  forgetPassword(){
    console.log(this.forgetPasswordForm.value);
    
  }

}
