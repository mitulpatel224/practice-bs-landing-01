import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-advertise1',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './advertise1.component.html',
  styleUrls: ['./advertise1.component.scss'],
})
export class Advertise1Component {}
