import {Component} from '@angular/core';
import {MenuController, NavParams} from 'ionic-angular';
import {Modal} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {ViewController} from 'ionic-angular';

import {NoteService} from '../../services/noteService';
import {Note} from '../../models/note';

@Component({
    templateUrl: 'build/pages/day/day.html',
})

export class DayListPage {
    day: string;
    items: Array<Note>;

    constructor(
        private navCtrl: NavController,
        private params: NavParams,
        private noteService: NoteService,
        private menu: MenuController,
        public viewCtrl: ViewController
    ) {
        this.day = params.get("date");
        this.loadNoteList();
    }

    // 获取所有的note list
    private loadNoteList() {
        this.items = this.noteService.getNoteListByDate(this.day);
    }

    //关闭dayModal
    dismiss() {
        this.viewCtrl.dismiss();
    }
}

