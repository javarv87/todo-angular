import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService]
})
export class TodoComponent implements OnInit {
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {}

  ngOnInit() {
  }

  addTodo() {
    if (this.newTodo.title.trim().length) {
      this.todoDataService.addTodo(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
    this.getRemaining();
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  getRemaining() {
    return this.todoDataService.getAllTodos()
      .filter((todo: Todo) => !todo.hasOwnProperty('complete'));
  }
}
