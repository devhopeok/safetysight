import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { GlobalProvider} from '../../providers/global/global';
import { DrawPage } from '../draw/draw';

@Component({
  selector: 'page-fill-form',
  templateUrl: 'fill-form.html'
})
export class FillFormPage {
  
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public globalProvider: GlobalProvider) {
      
  }

  onDraw() {
    this.navCtrl.push(DrawPage);
  }
}
