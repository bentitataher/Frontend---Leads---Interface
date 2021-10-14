import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnregistrementService } from '../../../../enregistrement.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  constructor(
    private _enregistrementService: EnregistrementService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  enregistrementForm = new FormGroup({
    entreprise: new FormControl(''),
    adresse: new FormControl(''),
    codePostal: new FormControl(''),
    codeTVA: new FormControl(''),
    dateEnregistrement: new FormControl(''),
    dateRDV: new FormControl(''),
    telephone: new FormControl(''),
    commentaire: new FormControl(''),
    contactProspect: new FormControl(''),
    enregistrement: new FormControl('')
  })

  validerEnregistrementForm() {
    console.log(this.enregistrementForm.value);

  }

}
