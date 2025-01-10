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
  data = [
    { id: 0, country: 'US', sales: 1318.37, expenses: 4212.41 },
    { id: 1, country: 'Germany', sales: 5847.95, expenses: 89.79 },
    { id: 2, country: 'UK', sales: 502.55, expenses: 2878.5 },
    { id: 3, country: 'Japan', sales: 4675.4, expenses: 488.65 },
    { id: 4, country: 'Italy', sales: 2117.57, expenses: 925.6 },
    { id: 5, country: 'Greece', sales: 322.1, expenses: 4163.96 },
    { id: 6, country: 'Spain', sales: 268.17, expenses: 186.2 },
    { id: 7, country: 'Canada', sales: 179.2, expenses: 491.2 },
    { id: 8, country: 'Mexico', sales: 761.97, expenses: 74.2 },
    { id: 9, country: 'Brazil', sales: 137.17, expenses: 123.2 },
    { id: 10, country: 'Argentina', sales: 469.2, expenses: 23.2 },
    { id: 11, country: 'Australia', sales: 926.2, expenses: 23.2 },
    { id: 12, country: 'China', sales: 146.2, expenses: 23.2 },
    { id: 13, country: 'India', sales: 123.2, expenses: 23.2 },
  ];
  dataCollectionView = new CollectionView(this.data, {
    pageSize: 5,
  });

  @ViewChild('flex') flex!: WjFlexGrid;
  init = () => {
    console.log(this.flex);
  };
}
