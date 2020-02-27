import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';

import { DesktopHomeComponent } from './components/desktop/desktop-home/desktop-home.component';
import { ProductsComponent } from './components/shared/products/products.component';
import { CartComponent } from './components/shared/cart/cart.component';
import { StateService } from './services/state.service';

const mobileRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: 'products' }
];

const desktopRoutes: Routes = [
  { path: 'home', component: DesktopHomeComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(mobileRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
  public constructor(private router: Router,
    private stateService: StateService) {

    if (this.stateService.getIsDesktop()) {
      this.router.resetConfig(desktopRoutes);
    }
  }
}


