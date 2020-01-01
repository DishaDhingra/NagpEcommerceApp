import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CheckoutComponent } from "./components/checkout/checkout.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";
import { CategoryComponent } from "./components/category/category.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot([

            {
                canActivate: [PopulatedCartRouteGuard],
                component: CheckoutComponent,
                path: "checkout"
            },
            {
                canActivate: [PopulatedCartRouteGuard],
                component: OrderConfirmationComponent,
                path: "confirmed"
            },
            {
                component: CategoryComponent,
                path: "category"
            },
            {   
                component: ProductDetailComponent,
                path: 'productdetail/:id' 
            },
            {
            component: StoreFrontComponent,
            path: "storeFront"
            },
            {
                component: MainPageComponent,
                path: "**"
            }])
    ]
})
export class AppRoutingModule { }
