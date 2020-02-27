import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  isDesktop: boolean;
  constructor(
    private stateService: StateService
  ) { }

  ngOnInit(): void {
    this.isDesktop = this.stateService.getIsDesktop();
  }

}
