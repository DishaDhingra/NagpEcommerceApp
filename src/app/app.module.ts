import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { HeaderBarComponent } from "./components/header-bar/header-bar.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { StoreFrontComponent } from "./components/store-front/store-front.component";
import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";
import { DeliveryOptionsDataService } from "./services/delivery-options.service";
import { ProductsDataService } from "./services/products.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { LocalStorageServie, StorageService } from "./services/storage.service";
import { CategoryComponent } from "./components/category/category.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { EmployeeComponent } from './components/employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientService } from "./services/httpclient.service";
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthenticationService } from "./services/authentication.service";
import { AuthGaurdService } from "./services/auth-guard.service";
import { BasicAuthHtppInterceptorService } from "./services/basicauthhttpinterceptor.service";
import { RegisterUserComponent } from './components/register-user/register-user.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HeaderBarComponent,
    MainPageComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    CategoryComponent,
    ProductDetailComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BasicAuthHtppInterceptorService,
    HttpClientService,
    AuthenticationService,
    AuthGaurdService,
    ProductsDataService,
    DeliveryOptionsDataService,
    PopulatedCartRouteGuard,
    LocalStorageServie,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    },
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true 
    }
  ]
})
export class AppModule { }
