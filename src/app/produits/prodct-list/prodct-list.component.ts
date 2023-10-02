import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-prodct-list',
  templateUrl: './prodct-list.component.html',
  styleUrls: ['./prodct-list.component.css']
})
export class ProdctListComponent implements OnInit{
  products: Product[] = []
  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          'assets/images/products/robe_1/1.webp',
          'assets/images/products/robe_1/2.webp',
          'assets/images/products/robe_1/3.webp',
          'assets/images/products/robe_1/4.webp',
          'assets/images/products/robe_1/5.webp',
          'assets/images/products/robe_1/6.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          '/assets/images/products/robe_2/1.webp',
          '/assets/images/products/robe_2/2.webp',
          '/assets/images/products/robe_2/3.webp',
          '/assets/images/products/robe_2/4.webp',
          '/assets/images/products/robe_2/5.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          '/assets/images/products/robe_3/1.webp',
          '/assets/images/products/robe_3/2.webp',
          '/assets/images/products/robe_3/3.webp',
          '/assets/images/products/robe_3/4.webp',
          '/assets/images/products/robe_3/5.webp',
          '/assets/images/products/robe_3/6.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          '/assets/images/products/robe_4/1.webp',
          '/assets/images/products/robe_4/2.webp',
          '/assets/images/products/robe_4/3.webp',
          '/assets/images/products/robe_4/4.webp',
          '/assets/images/products/robe_4/5.webp',
          '/assets/images/products/robe_4/6.webp',
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          '/assets/images/products/robe_5/1.webp',
          '/assets/images/products/robe_5/2.webp',
          '/assets/images/products/robe_5/3.webp',
          '/assets/images/products/robe_5/4.webp',
          '/assets/images/products/robe_5/5.webp',
          '/assets/images/products/robe_5/6.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          '/assets/images/products/robe_6/1.webp',
          '/assets/images/products/robe_6/2.webp',
          '/assets/images/products/robe_6/3.webp',
          '/assets/images/products/robe_6/4.webp',
          '/assets/images/products/robe_6/5.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          '/assets/images/products/robe_7/1.webp',
          '/assets/images/products/robe_7/2.webp',
          '/assets/images/products/robe_7/3.webp',
          '/assets/images/products/robe_7/4.webp',
          '/assets/images/products/robe_7/5.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 8,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
          '/assets/images/products/robe_8/1.webp',
          '/assets/images/products/robe_8/2.webp',
          '/assets/images/products/robe_8/3.webp',
          '/assets/images/products/robe_8/4.webp',
          '/assets/images/products/robe_8/5.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 9,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
        '/assets/images/products/robe_9/1.webp',
        '/assets/images/products/robe_9/2.webp',
        '/assets/images/products/robe_9/3.webp',
        '/assets/images/products/robe_9/4.webp',
        '/assets/images/products/robe_9/5.webp',
        '/assets/images/products/robe_9/6.webp',
        '/assets/images/products/robe_9/7.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 10,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
        '/assets/images/products/robe_10/1.webp',
        '/assets/images/products/robe_10/2.webp',
        '/assets/images/products/robe_10/3.webp',
        '/assets/images/products/robe_10/4.webp',
        '/assets/images/products/robe_10/5.webp',
        '/assets/images/products/robe_10/6.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 11,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
        'assets/images/products/robe_11/1.webp',
        'assets/images/products/robe_11/2.webp',
        'assets/images/products/robe_11/3.webp',
        'assets/images/products/robe_11/4.webp',
        'assets/images/products/robe_11/5.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 12,
        name: 'Robe portefeuille à volants fleurie',
        description: 'Robe portefeuille à volants',
        category:['femme','robe'],
        imageUrl:[
        '/assets/images/products/robe_12/1.webp',
        '/assets/images/products/robe_12/2.webp',
        '/assets/images/products/robe_12/3.webp',
        '/assets/images/products/robe_12/4.webp'
        ],
        sold_price: 1999,
        regular_price: 3999,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]
   console.log(this.products)
  }

}
