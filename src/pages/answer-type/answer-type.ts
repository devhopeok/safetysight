import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-answer-type',
  templateUrl: 'answer-type.html'
})
export class AnswerTypePage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  onClose() {
    this.viewCtrl.dismiss();
  }
}
