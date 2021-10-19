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
    description: new FormControl(''),
    secteur: new FormControl(''),
  })

  ajoutSecteur() {
    let data = this.ajoutSecteurForm.value;
    this._secteurService.ajout(data)
      .subscribe((data) => {
        console.log(data);
      })
    this.ajoutSecteurForm.reset();
  }

}
