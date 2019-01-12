import { Component } from '@angular/core';
import { NavController, ToastController, Events, MenuController, NavParams } from 'ionic-angular';
import { Signup4Page } from '../signup4/signup4';

@Component({
  selector: 'page-signup3',
  templateUrl: 'signup3.html'
})
export class Signup3Page {
  signupInfo = {
    isPremium: false,
    card: '',
    ccNumber: '',
    expiry: '',
    ccv: '',
  }
  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController,
    public navParams: NavParams) {
    let step2Info = this.navParams.get('signupInfo');

    this.signupInfo = {...this.signupInfo, ...step2Info};
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {

    });
  
    toast.present();
  }

  onSetFree() {
    this.signupInfo.isPremium = false;
  }

  onSetPremium() {
    this.signupInfo.isPremium = true;
  }

  onNext() {
    if (this.signupInfo.isPremium && (this.signupInfo.card == '' || this.signupInfo.ccNumber == '' 
      || this.signupInfo.expiry == '' || this.signupInfo.ccv == '')) {
      this.presentToast('The fields can\'t be blank');
      return;
    }

    this.navCtrl.push(Signup4Page, {signupInfo: this.signupInfo});
  }
}
