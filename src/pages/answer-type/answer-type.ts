import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-answer-type',
  templateUrl: 'answer-type.html'
})
export class AnswerTypePage {

  answerType = [{type: 'Checkbox', icon: 'checkbox'},
                {type: 'Date Time', icon: 'md-calendar'},
                {type: 'Drawing', icon: 'brush'},
                {type: 'Location', icon: 'md-pin'},
                {type: 'Multiple Choice', icon: 'ios-list-box'},
                {type: 'Media', icon: 'ios-videocam'},
                {type: 'Signature', icon: 'md-create'},
                {type: 'Slider', icon: 'md-game-controller-a'},
                {type: 'Text', icon: 'logo-angular'}];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  onClose() {
    this.viewCtrl.dismiss();
  }

  onSelectType(item) {
    this.viewCtrl.dismiss(item);
  }
}
