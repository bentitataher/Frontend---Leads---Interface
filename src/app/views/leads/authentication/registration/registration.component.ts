import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  inscriptionForm = new FormGroup({
    nom : new FormControl(''),
    prenom : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  });

  Inscription() {
    console.log(this.inscriptionForm.value);
  }

}
