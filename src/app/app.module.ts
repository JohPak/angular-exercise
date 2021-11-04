import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PartsComponent } from './components/parts/parts.component';
import { MenuComponent } from './components/menu/menu.component';
// to enable sorting in html
import { OrderModule } from 'ngx-order-pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PartsComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
