import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomePage} from './pages/home/home';
import {HistoryPage} from './pages/history/history';
import {SetPage} from './pages/setting/setting';
import {AdvicePage} from './pages/advice/advice';
import {AboutPage} from './pages/about/about';

import {TodoService} from './services/todoService';


@Component({
  templateUrl: 'build/app.html',
  providers: [TodoService]
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.pages = [
      { title: '今天', component: HomePage },
      { title: '过去', component: HistoryPage },
      { title: '设置', component: SetPage },
      { title: '建议', component: AdvicePage },
      { title: '关于', component: AboutPage },
    ]

  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}

ionicBootstrap(MyApp);
