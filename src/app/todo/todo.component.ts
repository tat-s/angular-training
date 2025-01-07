import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ScrollbarsAutoHideBehavior } from 'overlayscrollbars';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-todo',
  imports: [
    FormsModule,
    MatButton,
    MatIconModule,
    MatMiniFabButton,
    OverlayscrollbarsModule,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: string[] = [
    'AAA',
    'BBB',
    'CCC',
    'DDD',
    'EEE',
    'FFF',
    'GGG',
    'HHH',
    'III',
  ]; // Todoリスト
  completedTodos: string[] = []; // 完了済みTodoリスト
  inputText = ''; // 入力欄のテキスト

  // スクロールバーを設定
  options = {
    scrollbars: {
      theme: 'os-theme-dark',
      autoHide: 'leave' as ScrollbarsAutoHideBehavior,
      autoHideDelay: 100,
    },
  };

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
