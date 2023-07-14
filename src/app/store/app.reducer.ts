import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppState } from './app.state';

const initialState: AppState = {
  user: null,
  tasks: []
};

export const appReducer = createReducer(
  initialState,
  on(AppActions.login, (state, { user }) => ({ ...state, user })),
  on(AppActions.logout, state => ({ ...state, user: null })),
  on(AppActions.addTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, task] })),
  on(AppActions.deleteTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== taskId)
  })),
  on(AppActions.toggleTask, (state, { taskId }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
  }))
);
