import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { StateService } from './../../services/state.service';
import { GroceriesService } from './../../services/groceries.service';
import { HttpClientService } from './../../services/http-client.service';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [ 
    ProductsComponent, 
    CartComponent
   ],
  exports: [
    ProductsComponent, 
    CartComponent
  ],
  providers: [
    StateService,
    GroceriesService,
    HttpClientService
  ]
})

export class SharedModule { }
