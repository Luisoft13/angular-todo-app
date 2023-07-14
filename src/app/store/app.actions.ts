import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';

export const login = createAction('[Auth] Login', props<{ user: User }>());
export const logout = createAction('[Auth] Logout');
export const addTask = createAction('[Task] Add', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete', props<{ taskId: number }>());
export const toggleTask = createAction('[Task] Toggle', props<{ taskId: number }>());
