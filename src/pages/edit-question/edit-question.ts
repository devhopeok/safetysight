import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GlobalProvider} from '../../providers/global/global';

@Component({
  selector: 'page-edit-question',
  templateUrl: 'edit-question.html'
})
export class EditQuestionPage {
  index: any;
  question: any;

  constructor(public navCtrl: NavController,
    public globalProvider: GlobalProvider,
    public navParams: NavParams) {
    this.index = this.navParams.get('index');
    this.question = this.globalProvider.questions[this.index];
  }

  onRemove(index) {
    this.question.setting.splice(index, 1);
  }

  onAdd() {
    this.question.setting.push('');
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
