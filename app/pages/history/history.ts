import {Component} from '@angular/core';
import {MenuController} from 'ionic-angular';
import {Modal} from 'ionic-angular';

import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AddItemModal} from '../add-item/add-item';
import {DayListPage} from '../day/day';

import {TodoService} from '../../services/todoService';
import {Todo} from '../../models/todo';
import {History} from '../../models/history';

@Component({
  templateUrl: 'build/pages/history/history.html',
})
export class HistoryPage {
  nav: NavController;
  menu: MenuController;
  date: Date;
  historyList: Array<History>;

  constructor(navCtrl: NavController, menu: MenuController, private todoService: TodoService) {
    this.nav = navCtrl;
    this.menu = menu;

    this.initPage();
  }

  //初始化页面
  initPage() {
    this.historyList = this.todoService.getHistoryList();
  }

  //打开左侧菜单栏
  openMenu() {
    this.menu.open();
  }

  //打开每天事件详情页
  openDayListPage(day: string) {
    this.nav.push(DayListPage, { date: day });
  }

  //回到首页
  goHome() {
    this.nav.push(HomePage)
  }
}
