import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-available-form',
  templateUrl: 'available-form.html'
})
export class AvailableFormPage {

  activeForms = [
    {type: 'Schedule Form', icon: 'md-calendar'},
    {type: 'Incident', icon: 'warning'},
    {type: 'Hazard', icon: 'eye'},
    {type: 'Workshop Inspection', icon: 'albums'},
    {type: 'Vehicle Inspection', icon: 'car'},
    {type: 'Action', icon: 'options'},
   ];

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }

  onClose() {
    this.viewCtrl.dismiss();
  }

  onSelectForm(item) {
    this.viewCtrl.dismiss(item);
  }
}
