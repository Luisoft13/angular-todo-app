import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as AppActions from '../store/app.actions';
import { Task } from '../models/task.model';
import { AppState } from '../store/app.state';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  newTask = '';
  username: string = '';

  constructor(private store: Store<{app: AppState}>, private router: Router) {

  }

  ngAfterContentInit() {
    this.store.pipe(select('app')).subscribe((user) => {
      console.log('user', user)
      if (user === null) {
        console.log('entro')
        this.router.navigate(['/login']);
      }
    });
  }
  ngOnInit() {
    this.store.pipe(select('app')).subscribe((user) => {
      if (!user) {
        console.log('entro')
        this.router.navigate(['/login']);
      }
      this.username = user.user?.username || ''
    });
  }

  get tasks() {
    return this.store.pipe(select('app'),map((app) => app.tasks))
  }

  addTask() {
    if (this.newTask.trim() === '') {
      return;
    }

    let task: Task = {
      id: Date.now(),
      description: this.newTask,
      completed: false
    };

    this.store.dispatch(AppActions.addTask({ task }));
    this.newTask = '';
  }

  deleteTask(taskId: number) {
    this.store.dispatch(AppActions.deleteTask({ taskId }));
  }

  toggleTask(taskId: number) {
    this.store.dispatch(AppActions.toggleTask({ taskId }));
  }

  validateInput(event: KeyboardEvent) {
    const pattern = /^[a-zA-Z0-9\s]*$/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
