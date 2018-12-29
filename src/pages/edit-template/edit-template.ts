import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AnswerTypePage } from '../answer-type/answer-type';

@Component({
  selector: 'page-edit-template',
  templateUrl: 'edit-template.html'
})
export class EditTemplatePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  onSelectType() {
    const modal = this.modalCtrl.create(AnswerTypePage);
    modal.present();
  }
}
