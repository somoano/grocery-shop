import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { GroceriesService } from 'src/app/services/groceries.service';
import { Grocery } from 'src/app/models/groceries-response.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  isDesktop: boolean;
  products: Grocery[];

  constructor(
    private stateService: StateService,
    private groceriesService: GroceriesService
  ) { }

  ngOnInit(): void {
    this.isDesktop = this.stateService.getIsDesktop();
    this.getProducts();
  }

  getProducts(): void {
    this.groceriesService.getGroceries()
      .subscribe(response => {
        if (response && response.grocery) {
          this.products = response.grocery;
          console.log(this.products);
        } else {
          console.log('error')
        };
      });
  }

}
