import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: string[] = []; // Todoリスト
  completedTodos: string[] = []; // 完了済みTodoリスト
  inputText = ''; // 入力欄のテキスト

  /**
   * ADDボタンがクリックされたときの処理
   */
  onClickAddTodoButton() {
    // Todoリストに追加
    this.todos.push(this.inputText);
    // 入力欄をクリア
    this.inputText = '';
  }

  /**
   * TodoリストのComplateボタンがクリックされたときの処理
   * @param todo 完了したTodo
   */
  onClickCompleteButton(todo: string) {
    // Todoリストから削除
    this.todos = this.todos.filter((t) => t !== todo);
    // 完了済みTodoリストに追加
    this.completedTodos.push(todo);
  }

  /**
   * TodoリストのDeleteボタンがクリックされたときの処理
   * @param todo 削除するTodo
   */
  onClickDeleteButton(todo: string) {
    // Todoリストから削除
    this.todos = this.todos.filter((t) => t !== todo);
  }

  /**
   * 完了済みTodoリストのDeleteボタンがクリックされたときの処理
   * @param todo 削除する完了済みTodo
   */
  onClickDeleteCompletedButton(todo: string) {
    // 完了済みTodoリストから削除
    this.completedTodos = this.completedTodos.filter((t) => t !== todo);
  }
}
