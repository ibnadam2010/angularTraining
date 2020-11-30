import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  appareilFirst = "Lampe";
  appareilSecond = "Micro Onde";
  appreilThird = "Torche";
  
  constructor(){
    setTimeout(() => {
      this.isAuth=true
    }, 8000);
  }

  onAllumer(){
    console.log("bouton allumer a été cliqué");
  }
}
