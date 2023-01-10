import { Component } from '@angular/core';
export interface PeriodicElement {
  element_name: string;
  ids: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ids: 1, element_name: 'Hydrogen', weight: 1.0079},
  {ids: 2, element_name: 'Helium', weight: 4.0026},
  {ids: 3, element_name: 'Lithium', weight: 6.941},
  {ids: 4, element_name: 'Beryllium', weight: 9.0122},
  {ids: 5, element_name: 'Boron', weight: 10.811},
  {ids: 6, element_name: 'Carbon', weight: 12.0107},
  {ids: 7, element_name: 'Nitrogen', weight: 14.0067},
  {ids: 8, element_name: 'Oxygen', weight: 15.9994},
  {ids: 9, element_name: 'Fluorine', weight: 18.9984},
  {ids: 10, element_name: 'Neon', weight: 20.1797},
];

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent {
  displayedColumns: string[] = ['ids', 'element_name', 'weight'];
  dataSource = ELEMENT_DATA;
  
}
