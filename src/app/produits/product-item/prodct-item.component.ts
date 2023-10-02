import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-prodct-item',
  templateUrl: './prodct-item.component.html',
  styleUrls: ['./prodct-item.component.css']
})
export class ProdctItemComponent implements OnInit{
 @Input() product: Product | undefined;
  constructor() {
  }
  ngOnInit(): void {
  }


}
