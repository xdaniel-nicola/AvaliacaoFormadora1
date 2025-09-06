import { Component } from '@angular/core';
import { IonHeader, IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardContent, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonCardHeader,
  IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader,
     IonToolbar, 
     IonTitle, 
     IonContent, 
     IonCard, 
     IonCardContent, 
     IonCardSubtitle, 
     IonCardTitle, 
     IonCardHeader,
     IonButton,
     RouterLink],
})
export class HomePage {
  constructor() {}
}
