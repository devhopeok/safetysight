import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemplatesPage } from '../templates/templates';
import { ActionsPage } from '../actions/actions';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TemplatesPage;
  tab2Root = ActionsPage;
  
  constructor(public navCtrl: NavController) {
    
  }
}
