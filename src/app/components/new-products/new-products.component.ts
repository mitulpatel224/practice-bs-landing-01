import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCategoryCardComponent } from './product-category-card/product-category-card.component';

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [
    CommonModule,
    SectionHeaderComponent,
    ProductCardComponent,
    ProductCategoryCardComponent,
  ],
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
})
export class NewProductsComponent {}
