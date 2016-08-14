import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';
import {History} from '../models/history';
import * as _ from 'lodash';
import * as moment from 'moment';

/**
 * Todo服务类
 */
@Injectable()
export class TodoService {
    //todo数据
    todos: Array<Todo>;

    constructor() {
        this.todos = [
            { title: '刷朋友圈', createdAt: new Date(2016, 7, 3, 18, 20, 30) },
            { title: '看TED', createdAt: new Date(2016, 7, 3, 8, 20, 30) },
            { title: '吃晚餐', createdAt: new Date(2016, 7, 3, 12, 20, 30) },
            { title: '视频直播中', createdAt: new Date(2016, 7, 3, 18, 20, 30) },
            { title: '在跑步', createdAt: new Date(2016, 7, 3, 18, 20, 30) },
            { title: '在地铁上', createdAt: new Date(2016, 7, 31, 8, 20, 30) },
            { title: '刷朋友圈', createdAt: new Date(2016, 7, 2, 18, 20, 30) },
            { title: '看TED', createdAt: new Date(2016, 7, 2, 8, 20, 30) },
            { title: '吃晚餐', createdAt: new Date(2016, 7, 2, 12, 20, 30) },
            { title: '视频直播中', createdAt: new Date(2016, 7, 2, 18, 20, 30) },
            { title: '在跑步', createdAt: new Date(2016, 6, 31, 18, 20, 30) },
            { title: '在地铁上', createdAt: new Date(2016, 6, 31, 8, 20, 30) },
            { title: '看电视', createdAt: new Date(2016, 6, 30, 12, 20, 30) },
            { title: '读书', createdAt: new Date(2016, 6, 29, 18, 20, 30) },
            { title: '刷微博', createdAt: new Date(2016, 6, 29, 8, 20, 30) },
            { title: '旅行中', createdAt: new Date(2016, 6, 29, 12, 20, 30) },
            { title: '开车中', createdAt: new Date(2016, 6, 31, 18, 20, 30) },
            { title: '晒太阳', createdAt: new Date(2016, 6, 28, 8, 20, 30) },
            { title: '学习code', createdAt: new Date(2016, 6, 28, 12, 20, 30) },
            { title: '逛街ing', createdAt: new Date(2016, 6, 28, 18, 20, 30) },
            { title: '玩游戏', createdAt: new Date(2016, 6, 26, 8, 20, 30) },
            { title: '看电影', createdAt: new Date(2016, 6, 26, 12, 20, 30) },
            { title: '做瑜伽', createdAt: new Date(2016, 6, 26, 18, 20, 30) },
            { title: '摆摊卖东西', createdAt: new Date(2016, 6, 26, 8, 20, 30) },
            { title: '写代码', createdAt: new Date(2016, 6, 31, 26, 20, 30) },
            { title: '午睡中', createdAt: new Date(2016, 6, 29, 26, 20, 30) },
            { title: '做饭中', createdAt: new Date(2016, 6, 26, 8, 20, 30) },
            { title: '看新闻', createdAt: new Date(2016, 6, 25, 12, 20, 30) },
            { title: '刷朋友圈', createdAt: new Date(2016, 6, 25, 18, 20, 30) },
            { title: '看TED', createdAt: new Date(2016, 6, 25, 8, 20, 30) },
            { title: '吃晚餐', createdAt: new Date(2016, 6, 24, 12, 20, 30) },
            { title: '视频直播中', createdAt: new Date(2016, 6, 24, 18, 20, 30) },
        ]
    }

    //获取所有历史统计
    getHistoryList(): Array<History> {
        let result = _.groupBy(this.todos, (item) => {
            return moment(item.createdAt).format("YYYY-MM-DD");
        });

        let historyList = _.map(result, (items, key) => {
            return new History(key, items.length);
        });

        return _.orderBy(historyList, 'date', 'desc');
    }

    //获取某一天的todo列表
    getTodoListByDate(date: string): Array<Todo> {
        let dayList = _.filter(this.todos, (item) => {
            return moment(item.createdAt).format("YYYY-MM-DD") == date
        });

        let result = _.orderBy(dayList, 'createdAt', 'asc');
        return result;
    }

    //添加一条todo
    addTodoItem(item: Todo) {
        this.todos.push(item);
    }
}
