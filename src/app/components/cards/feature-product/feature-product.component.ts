import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.scss'],
})
export class FeatureProductComponent {
  @Input() public product?: { image: string; description: string; alt: string };
  @Input() public invert: boolean = false;
}
