import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css',
})
export class FamilyComponent { }
