import { User } from '../models/user.model';
import { Task } from '../models/task.model';

export interface AppState {
  user: User | null;
  tasks: Task[];
}
