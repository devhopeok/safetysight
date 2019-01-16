import { Component } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-draw',
  templateUrl: 'draw.html'
})
export class DrawPage {

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController) {
    
  }
}
