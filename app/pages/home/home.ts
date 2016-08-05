import {Component} from '@angular/core';
import {MenuController} from 'ionic-angular';
import {Modal} from 'ionic-angular';
import {Alert} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {AddItemModal} from '../add-item/add-item';
import {TodoService} from '../../services/todoService';
import {Todo} from '../../models/todo';
import * as moment from 'moment';

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  nav: NavController;
  menu: MenuController;
  today: string;
  items: Array<Todo>;
  todoService: TodoService;

  constructor(navCtrl: NavController, todoService: TodoService, menu: MenuController) {

    this.today = moment().format("YYYY-MM-DD");

    this.nav = navCtrl;
    this.menu = menu;

    this.todoService = todoService;
    this.loadTodoList();
  }

  // 获取所有的todo list
  private loadTodoList() {
    this.items = this.todoService.getTodoListByDate(this.today);
  }

  //打开左侧菜单栏
  openMenu() {
    this.menu.open();
  }

  //提醒模块弹出

  alertModel() {
    let prompt = Alert.create({
      title: '新增事项',
      inputs: [
        {
          name: 'title',
          placeholder: '正在做的事'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    this.nav.present(prompt);
  }

  // 打开新增一条todo的页面
  addItem() {
    let modal = Modal.create(AddItemModal);
    this.nav.present(modal);
    this.loadTodoList();
  }
}
