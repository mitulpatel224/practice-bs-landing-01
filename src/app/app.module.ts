import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Advertise1Component } from './components/advertise1/advertise1.component';
import { Advertise2Component } from './components/advertise2/advertise2.component';
import { ExploreComponent } from './components/explore/explore/explore.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewProductsComponent } from './components/new-products/new-products.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HeroComponent,
    NewProductsComponent,
    ExploreComponent,
    Advertise1Component,
    Advertise2Component,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
