import { Component } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from 'ionic-angular';
import { TemplatesPage } from '../templates/templates';
import { ResetPwdPage } from '../reset-pwd/reset-pwd';
import { Signup1Page } from '../signup1/signup1';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  
  loginInfo = {
    email: '',
    password: '',
  }

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController) {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  goHome() {
    if (this.loginInfo.email == '' || this.loginInfo.password == '') {
      this.presentToast('The email address and password can\'t be blank');
      return;
    }

    if (this.loginInfo.email != 'test' || this.loginInfo.password != 'test') {
      this.presentToast('The email or password is incorrect.');
      return;
    }
    
    localStorage.setItem('loginInfo', JSON.stringify(this.loginInfo));
    localStorage.setItem('lastLoggedIn', new Date().toString());
    this.navCtrl.setRoot(TemplatesPage);
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

  gotoResetPwd() {
    this.navCtrl.push(ResetPwdPage);
  }

  gotoSignup() {
    this.navCtrl.push(Signup1Page);
  }
}
