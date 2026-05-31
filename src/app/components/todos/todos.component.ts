import { Component, Input } from '@angular/core';
import { TodoType } from '../../pages/home/home.component';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
    @Input('todoList') public todos: TodoType[] = [];

    constructor() {}
}
