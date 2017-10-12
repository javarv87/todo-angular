import { Component } from '@angular/core';
import { Todo } from '../todo';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todo: Todo = new Todo();
  todoCollectionRef: AngularFirestoreCollection<Todo>;
  todo$: Observable<Todo[]>;

  constructor(private afs: AngularFirestore) {
    this.todoCollectionRef = this.afs.collection<Todo>('todos');
    this.todo$ = this.todoCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Todo;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  addTodo(todoDesc: string): void {
    if (todoDesc && todoDesc.trim().length) {
      this.todoCollectionRef.add({ description: todoDesc, completed: false });
    }
    this.todo = new Todo();
  }
  updateTodo(todo: Todo) {
    this.todoCollectionRef.doc(todo.id).update({ completed: !todo.completed });
  }
  deleteTodo(todo: Todo) {
    this.todoCollectionRef.doc(todo.id).delete();
  }
}
