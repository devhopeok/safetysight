import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TemplatesPage } from '../pages/templates/templates';
import { EditTemplatePage } from '../pages/edit-template/edit-template';
import { AnswerTypePage } from '../pages/answer-type/answer-type';
import { EditQuestionPage } from '../pages/edit-question/edit-question';
import { DragulaModule } from 'ng2-dragula';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    MyApp,
    TemplatesPage,
    EditTemplatePage,
    AnswerTypePage,
    EditQuestionPage,
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TemplatesPage,
    EditTemplatePage,
    AnswerTypePage,
    EditQuestionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
