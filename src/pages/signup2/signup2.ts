import { Component } from '@angular/core';
import { NavController, ToastController, Events, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html'
})
export class Signup2Page {
  
  signupInfo = {
    companyName: '',
    shortName: '',
  }

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public navParams: NavParams) {
    let step1Info = this.navParams.get('signupInfo');

    this.signupInfo = {...this.signupInfo, ...step1Info};
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

  onNext() {
    if (this.signupInfo.companyName == '' || this.signupInfo.shortName == '') {
      this.presentToast('The fields can\'t be blank');
      return;
    }
  }
}
