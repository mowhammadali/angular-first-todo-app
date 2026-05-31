import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { type TodoType } from '../../pages/home/home.component';

@Component({
    selector: 'app-todo-generator',
    templateUrl: './todo-generator.component.html',
    styleUrls: ['./todo-generator.component.css'],
})
export class TodoGeneratorComponent implements OnInit {
    @ViewChild('todoTitle') title: ElementRef;
    @ViewChild('todoDescription') description: ElementRef;
    @ViewChild('todoPriority') priority: ElementRef;
    @ViewChild('todoStatus') status: ElementRef;

    @Output('addNewTodo') addTodo = new EventEmitter<TodoType>();

    constructor() {}

    public addNewTodo(): void {
        const {
            title: { nativeElement: titleElement },
            description: { nativeElement: descriptionElement },
            priority: { nativeElement: priorityElement },
            status: { nativeElement: statusElement },
        } = this;

        const inputFillCheck =
            titleElement.value.trim() &&
            descriptionElement.value.trim() &&
            priorityElement.value.trim() &&
            statusElement.value.trim();

        if (inputFillCheck) {
            const newTodo: TodoType = {
                title: titleElement.value,
                description: descriptionElement.value,
                priority: priorityElement.value,
                status: statusElement.value,
            };

            this.addTodo.emit(newTodo);
        }
    }

    ngOnInit(): void {}
}
