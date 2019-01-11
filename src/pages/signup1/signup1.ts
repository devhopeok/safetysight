import { Component } from '@angular/core';
import { NavController, ToastController, Events, MenuController } from 'ionic-angular';
import { Signup2Page } from '../signup2/signup2';

@Component({
  selector: 'page-signup1',
  templateUrl: 'signup1.html'
})
export class Signup1Page {
  
  signupInfo = {
    email: '',
    firstName: '',
    surname: '',
  }

  constructor(public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public events: Events,
    public menuCtrl: MenuController) {
    
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
    if (this.signupInfo.email == '' || this.signupInfo.firstName == '' || this.signupInfo.surname == '') {
      this.presentToast('The fields can\'t be blank');
      return;
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.signupInfo.email.toLowerCase())) {
      this.presentToast('Please enter the valid email address.');
      return;
    }

    this.navCtrl.push(Signup2Page, {signupInfo: this.signupInfo});
  }
}
