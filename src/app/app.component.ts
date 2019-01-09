import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { TemplatesPage } from '../pages/templates/templates';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      const lastLoggedIn = new Date(localStorage.getItem('lastLoggedIn'));
      var timeDiff = new Date().getTime() - lastLoggedIn.getTime();
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

      if (localStorage.getItem('loginInfo') && diffDays < 28) {
        this.rootPage = TemplatesPage;
      } else {
        this.logOut();
      }
    });
  }

  logOut() {
    localStorage.removeItem('loginInfo');
    localStorage.removeItem('lastLoggedIn');
    this.nav.setRoot(LoginPage);
  }
}

