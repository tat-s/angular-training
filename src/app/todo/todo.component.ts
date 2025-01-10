import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AngularSplitModule } from 'angular-split';
import { ScrollbarsAutoHideBehavior } from 'overlayscrollbars';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

@Component({
  selector: 'app-todo',
  imports: [
    FormsModule,
    MatButton,
    MatIconModule,
    OverlayscrollbarsModule,
    AngularSplitModule,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todos: string[] = Array.from({ length: 50 }, (_, i) => `タスク${i + 1}`);
  completedTodos: string[] = []; // 完了済みTodoリスト
  inputText = ''; // 入力欄のテキスト
  isLargerThanFullHD = false; // 1920px以上の画面かどうか
  isSmallerThanSD = false; // 980px以下の画面かどうか

  // スクロールバーを設定
  options = {
    scrollbars: {
      theme: 'os-theme-dark',
      autoHide: 'leave' as ScrollbarsAutoHideBehavior,
      autoHideDelay: 100,
    },
  };

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive.observe(Breakpoints.XLarge).subscribe((result) => {
      if (result.matches) {
        this.isLargerThanFullHD = true;
      } else {
        this.isLargerThanFullHD = false;
      }
    });
    this.responsive
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        if (result.matches) {
          this.isSmallerThanSD = true;
        } else {
          this.isSmallerThanSD = false;
        }
      });
  }

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
