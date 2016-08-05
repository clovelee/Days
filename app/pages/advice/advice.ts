import {Component} from '@angular/core';
import {MenuController} from 'ionic-angular';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/advice/advice.html'
})

export class AdvicePage {
    nav: NavController;
    menu: MenuController;
    today: Date;

    constructor(navCtrl: NavController, menu: MenuController) {

        this.nav = navCtrl;
        this.menu = menu;

    }

    //打开左侧菜单栏
    openMenu() {
        this.menu.open();
    }

}
