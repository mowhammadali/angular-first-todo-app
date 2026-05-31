import { Component, OnInit, Input } from '@angular/core';
import { TodoType } from '../../pages/home/home.component';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
    @Input('todo') public todo: TodoType;

    constructor() {}

    ngOnInit(): void {}
}
