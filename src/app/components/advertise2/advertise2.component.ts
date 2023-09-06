import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-advertise2',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  templateUrl: './advertise2.component.html',
  styleUrls: ['./advertise2.component.scss'],
})
export class Advertise2Component {}
