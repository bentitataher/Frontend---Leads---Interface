import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnregistrementService } from '../../../../enregistrement.service'
import { SecteurService } from '../../../../secteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  constructor(
    private _enregistrementService: EnregistrementService,
    private _secteurService: SecteurService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  secteur :any;
  logoUpload: File;

  onFileSelect(event) {
    this.logoUpload = event.target.files[0];
    console.log("check point ==> : ", this.logoUpload);
  }

  enregistrementForm = new FormGroup({
    entreprise: new FormControl(''),
    adresse: new FormControl(''),
    codePostal: new FormControl(''),
    codeTVA: new FormControl(''),
    secteur: new FormControl(''),
    dateEnregistrement: new FormControl(''),
    dateRDV: new FormControl(''),
    telephone: new FormControl(''),
    commentaire: new FormControl(''),
    contactProspect: new FormControl(''),
  })

  ajoutEnregistrement() {

    let data = this.enregistrementForm.value

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    });

    formData.append('image', this.logoUpload, this.logoUpload.name);

    this._enregistrementService.ajout(formData)
      .subscribe((data) => {
        console.log("From API post with multer", data);
      })


  }

}
