import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  questions = [{"answerType":"Section Header","question":"Section1","icon":"ios-book","mandatory":false,"setting":{}},
                {"answerType":"Checkbox","question":"Check the option","icon":"checkbox","mandatory":false,"setting":{}},
                {"answerType":"Date Time","question":"Pick date/time","icon":"md-calendar","mandatory":false,"setting":{"date":true,"time":true}},
                {"answerType":"Drawing","question":"Draw something","icon":"brush","mandatory":false,"setting":{}},
                {"answerType":"Location","question":"Pick the accident's location","icon":"md-pin","mandatory":false,"setting":{}},
                {"answerType":"Multiple Choice","question":"Choose multiple items","icon":"ios-list-box","mandatory":false,"setting":["Yes","No","N/A"]},
                {"answerType":"Media","question":"Add media","icon":"ios-videocam","mandatory":false,"setting":{}},
                {"answerType":"Signature","question":"Sign, please","icon":"md-create","mandatory":false,"setting":{"timestamp":true}},
                {"answerType":"Slider","question":"Determine the scope of slider","icon":"md-game-controller-a","mandatory":false,"setting":{"min":0,"max":10,"increment":1}},
                {"answerType":"Text","question":"Input the text","icon":"logo-angular","mandatory":false,"setting":{}}];

  constructor() {
    console.log('Hello GlobalProvider Provider');
  }

}
