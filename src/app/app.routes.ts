import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'todo-list',
    component: TodoComponent,
  },
];