import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComposantComponent } from './premier-composant/premier-composant.component';
import { AppareilComposantComponent } from './appareil-composant/appareil-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierComposantComponent,
    AppareilComposantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
