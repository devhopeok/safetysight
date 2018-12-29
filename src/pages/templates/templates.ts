import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTemplatePage } from '../edit-template/edit-template';

@Component({
  selector: 'page-templates',
  templateUrl: 'templates.html'
})
export class TemplatesPage {

  constructor(public navCtrl: NavController) {

  }

  onEditTemplate() {
    this.navCtrl.push(EditTemplatePage);
  }
}
