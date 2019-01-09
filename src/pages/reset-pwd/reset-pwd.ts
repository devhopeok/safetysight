import { Component } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-reset-pwd',
  templateUrl: 'reset-pwd.html'
})
export class ResetPwdPage {
  
  resetInfo = {
    email: '',
    password: '',
  }

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController) {
    
  }
}
