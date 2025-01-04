import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: string[] = [];
  inputText = '';

  onClickAddTodoButton() {
    // Todoリストに追加
    this.todos.push(this.inputText);
    // 入力欄をクリア
    this.inputText = '';
  }
}
