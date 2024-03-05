import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule, InputNumberModule, ButtonModule, InputTextModule],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css',
})
export class AcademicComponent {}
