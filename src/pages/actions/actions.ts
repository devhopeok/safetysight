import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AvailableFormPage } from '../available-form/available-form';

@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html'
})
export class ActionsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  onAdd() {
    const modal = this.modalCtrl.create(AvailableFormPage);
    modal.onDidDismiss(data => {
      if (data) {}
    });
    modal.present();
  }
}
