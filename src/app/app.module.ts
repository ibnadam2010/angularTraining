import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PremierComposantComponent } from './premier-composant/premier-composant.component';
import { AppareilComposantComponent } from './appareil-composant/appareil-composant.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AppareilService} from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    PremierComposantComponent,
    AppareilComposantComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
