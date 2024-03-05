import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, InputNumberModule, ButtonModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
})
export class PersonalComponent {}
