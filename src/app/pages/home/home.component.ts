import { Component, OnInit } from '@angular/core';

export type TodoType = {
    title: string;
    description: string;
    status: string;
    priority: string;
    [key: string]: any;
};

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public todos: TodoType[] = [];

    constructor() {}

    public addNewTodo(todo: TodoType) {
        this.todos = [...this.todos, todo];
    }

    ngOnInit(): void {}
}
