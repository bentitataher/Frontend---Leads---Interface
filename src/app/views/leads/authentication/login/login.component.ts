import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private toasterService: ToasterService) { }

  ngOnInit(): void {
    this.showSuccess();
  }

  showSuccess() {
    this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
  }

  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });

  login(){
    console.log(this.loginForm.value);
    
  }

 }
