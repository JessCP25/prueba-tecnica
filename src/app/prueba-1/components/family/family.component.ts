import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [
    CommonModule, ButtonModule, CalendarModule
  ],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css',
})
export class FamilyComponent { }
