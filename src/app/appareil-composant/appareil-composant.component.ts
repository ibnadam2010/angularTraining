import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil-composant',
  templateUrl: './appareil-composant.component.html',
  styleUrls: ['./appareil-composant.component.css']
})
export class AppareilComposantComponent implements OnInit {
 @Input() nomAppareil: string;
 @Input() etatAppareil:string;
  constructor() { }

  ngOnInit(): void {
  }

  getEtat(){
    return this.etatAppareil;
  }

}
