import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import {ViewController} from 'ionic-angular';

import {NoteService} from '../../services/noteService';
import {Note} from '../../models/note';

@Component({
    templateUrl: 'build/pages/add-item/add-item.html',
})
export class AddItemModal {
    note: Note;
    noteService: NoteService;

    constructor(private nav: NavController, noteService: NoteService,public viewCtrl: ViewController) {
        this.noteService = noteService;
        this.note = new Note("", null);
    }

    // 保存note
    saveItem() {
        this.note.createdAt = new Date();
        this.noteService.addNoteItem(this.note);
        this.nav.pop();
    }

    // 关闭添加条目
    dismiss(){
        this.viewCtrl.dismiss();
    }

}
