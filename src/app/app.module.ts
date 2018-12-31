import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TemplatesPage } from '../pages/templates/templates';
import { EditTemplatePage } from '../pages/edit-template/edit-template';
import { AnswerTypePage } from '../pages/answer-type/answer-type';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    TemplatesPage,
    EditTemplatePage,
    AnswerTypePage,
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
