import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CommonModule, ButtonModule, CalendarModule, ReactiveFormsModule],
  templateUrl: './family.component.html',
  styleUrl: './family.component.css',
})
export class FamilyComponent {
  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  personalInformationForm = this.fb.group({
    birthDate: ['', [Validators.required]],
    registrationDate: ['', [Validators.required]],
    spouseBirthDate: [''],
  },{
    validators: [this.validatorsService.isFieldOneMinorFieldTwo('birthDate', 'registrationDate')]
  });

  isInvalidField(field: string) {
    return this.validatorsService.isInvalidField(
      this.personalInformationForm,
      field
    );
  }

  onSubmit() {
    if(this.personalInformationForm.invalid){
      this.personalInformationForm.markAllAsTouched();
      return;
    }
  }
}
