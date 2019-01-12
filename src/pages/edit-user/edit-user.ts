import { Component } from '@angular/core';
import { NavController, ToastController, Events, MenuController, NavParams, ViewController } from 'ionic-angular';
import { TemplatesPage } from '../templates/templates';
import { ResetPwdPage } from '../reset-pwd/reset-pwd';
import { Signup1Page } from '../signup1/signup1';

@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html'
})
export class EditUserPage {
  
  userInfo = {
    email: '',
    firstName: '',
    surname: '',
  }

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.userInfo = this.navParams.get('userInfo') ? this.navParams.get('userInfo') : this.userInfo;
    console.log('this.uesrInfo', this.userInfo);
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

  onClose() {
    this.viewCtrl.dismiss();
  }

  onSave() {
    if (this.userInfo.firstName == '' || this.userInfo.surname == '' || this.userInfo.email == '') {
      this.presentToast('The fields can\'t be blank');
      return;
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.userInfo.email.toLowerCase())) {
      this.presentToast('Please enter the valid email address.');
      return;
    }
    
    this.viewCtrl.dismiss(this.userInfo);
  }
}
