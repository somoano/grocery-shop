import { NgModule } from '@angular/core';

import { DesktopHomeComponent } from './desktop-home.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [ 
    DesktopHomeComponent
   ],
   imports: [
    SharedModule
   ]
})

export class DesktopHomeModule { }
