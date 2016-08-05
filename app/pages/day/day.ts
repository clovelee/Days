import {Component} from '@angular/core';
import {MenuController, NavParams} from 'ionic-angular';
import {Modal} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {ViewController} from 'ionic-angular';

import {TodoService} from '../../services/todoService';
import {Todo} from '../../models/todo';

@Component({
    templateUrl: 'build/pages/day/day.html',
})

export class DayListPage {
    day: string;
    items: Array<Todo>;

    constructor(
        private navCtrl: NavController,
        private params: NavParams,
        private todoService: TodoService,
        private menu: MenuController,
        public viewCtrl: ViewController
    ) {
        this.day = params.get("date");
        this.loadTodoList();
    }

    // 获取所有的todo list
    private loadTodoList() {
        this.items = this.todoService.getTodoListByDate(this.day);
    }

    //关闭dayModal
    dismiss() {
        this.viewCtrl.dismiss();
    }
}

