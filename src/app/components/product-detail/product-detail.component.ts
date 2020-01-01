import { Component, OnInit } from '@angular/core';
import { Product } from "app/models/product.model";
import { ProductsDataService } from "app/services/products.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'app/services/shopping-cart.service';
import { Observer } from 'rxjs/Observer';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductsDataService, private shoppingCartService: ShoppingCartService, private route : ActivatedRoute, private router: Router) { }
  products: Product[];
  cartProducts: any = [];
  errorMessage: string;
  productIdentity: number;

  ngOnInit() {
      this.productService.all().subscribe({
      next: products => this.products = products,
      error: err => this.errorMessage = err
    });

    let id = +this.route.snapshot.paramMap.get('id');
    this.productIdentity = id;
  }

  backInCatalog() {
    this.router.navigate(['/category']);
  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.productId === product.productId));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }

}