import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeatureProductComponent } from '../cards/feature-product/feature-product.component';
import { SliderCardComponent } from '../slider/slider-card/slider-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SliderCardComponent, FeatureProductComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {}
