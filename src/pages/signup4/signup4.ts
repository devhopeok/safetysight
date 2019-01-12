import { Component } from '@angular/core';
import { NavController, ToastController, Events, NavParams, ModalController } from 'ionic-angular';
import { EditUserPage } from '../edit-user/edit-user';
import { Signup5Page } from '../signup5/signup5';

@Component({
  selector: 'page-signup4',
  templateUrl: 'signup4.html'
})
export class Signup4Page {
  
  signupInfo = {
    users: [],
  }

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    let step3Info = this.navParams.get('signupInfo');

    this.signupInfo = {...this.signupInfo, ...step3Info};
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
    this.navCtrl.push(Signup5Page, {signupInfo: this.signupInfo});
  }

  onAddUser() {
    const modal = this.modalCtrl.create(EditUserPage);
    modal.onDidDismiss(data => {
      if (data) {
        this.signupInfo.users.push(data);
      }
    });
    modal.present();
  }

  onEditUser(index) {
    const modal = this.modalCtrl.create(EditUserPage, {userInfo: this.signupInfo.users[index]});
    modal.onDidDismiss(data => {
      if (data) {
        this.signupInfo.users[index] = data;
      }
    });
    modal.present();
  } 
}
