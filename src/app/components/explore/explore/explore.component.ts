import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeatureProductComponent } from '../../cards/feature-product/feature-product.component';
import { SectionHeaderComponent } from '../../section-header/section-header.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, FeatureProductComponent],
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  public feature1 = {
    image: 'https://placehold.co/540',
    alt: 'dummy-540',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto rerum aut
    quis pariatur. Pariatur animi, totam laudantium doloremque tempora reprehenderit
    dignissimos perspiciatis.`,
  };
  public feature2 = {
    image: 'https://placehold.co/240',
    alt: 'dummy-240',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    dignissimos perspiciatis.`,
  };
  public feature3 = {
    image: 'https://placehold.co/240',
    alt: 'dummy-240',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    dignissimos perspiciatis.`,
  };
}
