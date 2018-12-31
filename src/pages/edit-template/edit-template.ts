import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AnswerTypePage } from '../answer-type/answer-type';
import { DragulaService } from 'ng2-dragula';
@Component({
  selector: 'page-edit-template',
  templateUrl: 'edit-template.html'
})
export class EditTemplatePage {
  answerType = 'Multiple Choice';
  question = "";
  icon = 'ios-list-box';
  questions = [];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public dragulaService: DragulaService) {
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
    this.questions.push({answerType: this.answerType, question: this.question, icon: this.icon});
    this.answerType = 'Multiple Choice';
    this.question = "";
    this.icon = 'ios-list-box';
  }
}
