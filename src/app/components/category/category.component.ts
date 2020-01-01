import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from "app/services/products.service";
import { Product } from "app/models/product.model";
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private productsService: ProductsDataService) { }
  public products: Observable<Product[]>;

  
  public ngOnInit(): void {
    this.products = this.productsService.all();
  }
}

