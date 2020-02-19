import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Product } from "app/models/product.model";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { CachcingServiceBase } from "./caching.service";
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';


let count = 0;

@Injectable()
export class ProductsDataService extends CachcingServiceBase {
  private products: Observable<Product[]>;

  public constructor(private http: Http) {
    super();
  }

  // public all(): Observable<Product[]> {
  //   return this.cache<Product[]>(() => this.products,
  //                                (val: Observable<Product[]>) => this.products = val,
  //                                () => this.http
  //                                          .get("/assets/products.json")
  //                                          .map((response) => response.json()
  //                                                                     .map((item) => {
  //                                                                       let model = new Product();
  //                                                                       model.updateFrom(item);
  //                                                                       return model;
  //                                                                     })));

  // }

  public all(): Observable<Product[]> {
    return this.cache<Product[]>(() => this.products,
                                 (val: Observable<Product[]>) => this.products = val,
                                 () => this.http
                                           .get("https://disha-dhingra-product-service1.35.237.16.11.nip.io/products/productlist")
                                           .map((response) => response.json()
                                                                      .map((item) => {
                                                                        let model = new Product();
                                                                        model.updateFrom(item);
                                                                        return model;
                                                                      })));

  }
}
