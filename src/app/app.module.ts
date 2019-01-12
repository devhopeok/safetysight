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
import { LoginPage } from '../pages/login/login';
import { ResetPwdPage } from '../pages/reset-pwd/reset-pwd';
import { Signup1Page } from '../pages/signup1/signup1';
import { Signup2Page } from '../pages/signup2/signup2';
import { Signup3Page } from '../pages/signup3/signup3';
import { Signup4Page } from '../pages/signup4/signup4';
import { Signup5Page } from '../pages/signup5/signup5';
import { EditUserPage } from '../pages/edit-user/edit-user';

@NgModule({
  declarations: [
    MyApp,
    TemplatesPage,
    EditTemplatePage,
    AnswerTypePage,
    EditQuestionPage,
    LoginPage,
    ResetPwdPage,
    Signup1Page,
    Signup2Page,
    Signup3Page,
    Signup4Page,
    Signup5Page,
    EditUserPage,
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
    LoginPage,
    ResetPwdPage,
    Signup1Page,
    Signup2Page,
    Signup3Page,
    Signup4Page,
    Signup5Page,
    EditUserPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider
  ]
})
export class AppModule {}
