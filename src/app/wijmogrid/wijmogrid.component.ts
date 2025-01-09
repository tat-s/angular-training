import { Component, ViewChild } from '@angular/core';
import { WjFlexGrid, WjGridModule } from '@grapecity/wijmo.angular2.grid';

@Component({
  selector: 'app-wijmogrid',
  imports: [WjGridModule],
  templateUrl: './wijmogrid.component.html',
  styleUrl: './wijmogrid.component.scss',
})
export class WijmogridComponent {
  data: any[];
  @ViewChild('flex') flex!: WjFlexGrid;
  constructor() {
    this.data = [
      { id: 0, country: 'US', sales: 1318.37, expenses: 4212.41 },
      { id: 1, country: 'Germany', sales: 5847.95, expenses: 89.79 },
      { id: 2, country: 'UK', sales: 502.55, expenses: 2878.5 },
      { id: 3, country: 'Japan', sales: 4675.4, expenses: 488.65 },
      { id: 4, country: 'Italy', sales: 2117.57, expenses: 925.6 },
      { id: 5, country: 'Greece', sales: 322.1, expenses: 4163.96 },
    ];
  }
  init = () => {
    console.log(this.flex);
  };
}
