import { Component } from '@angular/core';
import {AppareilService} from './services/appareil.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  isAuth = false;
  //lastUpdate = new Date();

  lastUpdate = new Promise(
  (resolve,reject)=>{
    const mdate = new Date();
    setTimeout(
    ()=>{resolve(mdate);},2000
    );
  }
  )

  /* traité desormais par le service AppareilService
  appareils = [
    {
      nomAppareil :"Lampe",
      etatAppareil :"Eteint"
    },
    {
      nomAppareil:"Micro Onde",
      etatAppareil:"Allumer"
    },
    {
      nomAppareil:"Torche",
      etatAppareil:"Eteint"
    },
     {
      nomAppareil:"Télévision",
      etatAppareil:"Allumer"
    }
  ];*/

  /* traité desormais par ngFor
  appareilFirst = "Lampe";
  appareilSecond = "Micro Onde";
  appreilThird = "Torche";*/

  appareils : any[];
  constructor(private appareilService: AppareilService){
    setTimeout(() => {
      this.isAuth=true
    }, 8000);
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
  }
  onAllumer(){
    console.log("bouton allumer a été cliqué");
  }
}
