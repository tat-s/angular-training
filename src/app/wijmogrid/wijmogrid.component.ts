import { Component, ViewChild } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { WjFlexGrid, WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

@Component({
  selector: 'app-wijmogrid',
  imports: [WjGridModule, WjInputModule],
  templateUrl: './wijmogrid.component.html',
  styleUrl: './wijmogrid.component.scss',
})
export class WijmogridComponent {
  maxPagesToShow: number = 3; // 表示するページ番号の最大数
  pageSize: number = 10; // 1ページのデータ数

  // データ
  data = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    country: `Country ${i + 1}`,
    sales: Math.random() * 10000,
    expenses: Math.random() * 5000,
  }));
  dataCollectionView = new CollectionView(this.data, {
    pageSize: 5,
  });

  @ViewChild('flex') flex!: WjFlexGrid;
  init = () => {
    console.log(this.flex);
  };

  // 現在表示すべきページ番号のリストを計算
  getVisiblePages(): number[] {
    const total = this.dataCollectionView.pageCount; // 総ページ数
    const current = this.dataCollectionView.pageIndex + 1; // 現在のページ (0始まりを補正)
    const half = Math.floor(this.maxPagesToShow / 2); // 中心位置
    let start = Math.max(1, current - half); // 開始ページ
    let end = Math.min(total, current + half); // 終了ページ

    // ページ数が不足する場合に調整
    if (end - start + 1 < this.maxPagesToShow) {
      if (start === 1) {
        end = Math.min(total, start + this.maxPagesToShow - 1);
      } else if (end === total) {
        start = Math.max(1, end - this.maxPagesToShow + 1);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  // ページを変更
  changePage(page: number) {
    this.dataCollectionView.moveToPage(page - 1);
  }
}
