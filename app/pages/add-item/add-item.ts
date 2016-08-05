import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {ViewController} from 'ionic-angular';

import {TodoService} from '../../services/todoService';
import {Todo} from '../../models/todo';

@Component({
    templateUrl: 'build/pages/add-item/add-item.html',
})
export class AddItemModal {
    todo: Todo;
    todoService: TodoService;

    constructor(private nav: NavController, todoService: TodoService,public viewCtrl: ViewController) {
        this.todoService = todoService;
        this.todo = new Todo("", null);
    }

    // 保存todo
    saveItem() {
        this.todo.createdAt = new Date();
        this.todoService.addTodoItem(this.todo);
        this.nav.pop();
    }

    // 关闭添加条目
    dismiss(){
        this.viewCtrl.dismiss();
    }

}
