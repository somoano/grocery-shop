import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { DesktopHomeModule } from './components/desktop/desktop-home/desktop-home.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DesktopHomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
