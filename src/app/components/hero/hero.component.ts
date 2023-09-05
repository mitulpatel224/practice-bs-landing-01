import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderCardComponent } from '../slider/slider-card/slider-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SliderCardComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {}
