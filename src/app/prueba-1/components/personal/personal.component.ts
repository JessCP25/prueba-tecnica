import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    CommonModule,
    InputNumberModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
})
export class PersonalComponent {
  constructor(private fb: FormBuilder){
    this.personalInformationForm.disable();
  }

  personalInformationForm = this.fb.group({
    name: ['',[Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required]],
    city: ['',[Validators.required]]
  })
}
