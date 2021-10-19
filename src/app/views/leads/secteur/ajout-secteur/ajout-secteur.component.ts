import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SecteurService } from '../../../../secteur.service'

@Component({
  selector: 'app-ajout-secteur',
  templateUrl: './ajout-secteur.component.html',
  styleUrls: ['./ajout-secteur.component.css']
})
export class AjoutSecteurComponent implements OnInit {

  constructor(private _secteurService: SecteurService) { }

  ngOnInit(): void {
  }

  ajoutSecteurForm = new FormGroup({
    descriptionSecteur: new FormControl(''),
    secteur: new FormControl(''),
  })

  ajoutSecteur() {
    let data = this.ajoutSecteurForm.value;
    console.log(data);
    
  }

}
