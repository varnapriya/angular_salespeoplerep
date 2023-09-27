import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
 salesPersonList:SalesPerson[]=[
  new SalesPerson("mikhil","ericks","michel@gmail.com",400000),
  new SalesPerson("jackson","Saleve","jackson@gmail.com",100000),
  new SalesPerson("mathew","brickson","mathew@gmail.com",500000)
];

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
