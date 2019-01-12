import { Component } from '@angular/core';
import { NavController, ToastController, Events, NavParams, ModalController } from 'ionic-angular';
import { TemplatesPage } from '../templates/templates';

@Component({
  selector: 'page-signup5',
  templateUrl: 'signup5.html'
})
export class Signup5Page {
  
  signupInfo = {
    formName: '',
    formPrefix: '',
    formIcon: 'Checklist',
  }

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    let step4Info = this.navParams.get('signupInfo');

    this.signupInfo = {...this.signupInfo, ...step4Info};
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
    if (this.signupInfo.formName == '' || this.signupInfo.formIcon == '' || this.signupInfo.formPrefix == '') {
      this.presentToast('The fields can\'t be blank');
      return;
    }
    console.log('this.signupInfo', this.signupInfo);
    this.navCtrl.setRoot(TemplatesPage);
  }
}
