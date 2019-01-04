import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AnswerTypePage } from '../answer-type/answer-type';
import { DragulaService } from 'ng2-dragula';
import { GlobalProvider} from '../../providers/global/global';
import { EditQuestionPage } from '../edit-question/edit-question';

@Component({
  selector: 'page-edit-template',
  templateUrl: 'edit-template.html'
})
export class EditTemplatePage {
  answerType = 'Multiple Choice';
  question = "";
  icon = 'ios-list-box';

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public dragulaService: DragulaService,
    public globalProvider: GlobalProvider) {
      
  }

  ionViewDidLoad() {
    const listContainer = document.getElementById('list');
    listContainer.addEventListener('touchmove', e => { e.preventDefault(); }, { passive:false });
  }

  onSelectType() {
    const modal = this.modalCtrl.create(AnswerTypePage);
    modal.onDidDismiss(data => {
      if (data) {
        this.answerType = data.type;
        this.icon = data.icon;
      }
    });
    modal.present();
  }

  onAddQuestion() {
    let setting = {};

    if (this.answerType == 'Date Time') {
      setting = { date: true, time: true};
    } else if (this.answerType == 'Multiple Choice') {
      setting = ['Yes', 'No', 'N/A'];
    } else if (this.answerType == 'Signature') {
      setting = { timestamp: true };
    } else if (this.answerType == 'Slider') {
      setting = { min: 0, max: 10, increment: 1};
    }

    this.globalProvider.questions.push(
      { answerType: this.answerType, 
        question: this.question, 
        icon: this.icon,
        mandatory: false,
        setting: setting,
      });

    this.answerType = 'Multiple Choice';
    this.question = "";
    this.icon = 'ios-list-box';
  }

  onEdit(index) {
    this.navCtrl.push(EditQuestionPage, {index});
  }
}
