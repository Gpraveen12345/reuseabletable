import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() displayedColumns?: string[];
  @Input() dataSource:any ;
  constructor() { }

  ngOnInit() {
  }
elog(element:any,test:any){
  console.log(element,test);
}
}
