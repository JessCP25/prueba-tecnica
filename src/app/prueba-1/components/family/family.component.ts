import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ValidatorsService } from '../../services/validators.service';
import { Router } from '@angular/router';
import { EditUsersService } from '../../services/edit-users.service';
import { User } from '../../interfaces/user.interface';

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
    private validatorsService: ValidatorsService,
    private router: Router,
    private editUsersService: EditUsersService
  ) {}

  personalInformationForm = this.fb.group(
    {
      birthDate: ['', [Validators.required]],
      registrationDate: ['', [Validators.required]],
      spouseBirthDate: [''],
    },
    {
      validators: [
        this.validatorsService.isFieldOneMinorFieldTwo(
          'birthDate',
          'registrationDate'
        ),
      ],
    }
  );

  isInvalidField(field: string) {
    return this.validatorsService.isInvalidField(
      this.personalInformationForm,
      field
    );
  }

  onSubmit() {
    if (this.personalInformationForm.invalid) {
      this.personalInformationForm.markAllAsTouched();
      return;
    }

    const formData = this.personalInformationForm.value;

    formData.birthDate = this.convertToUTCMinus5(formData.birthDate!);
    formData.registrationDate = this.convertToUTCMinus5(formData.registrationDate!);
    if(formData.spouseBirthDate){
      formData.spouseBirthDate = this.convertToUTCMinus5(formData.spouseBirthDate);
    }

    this.editUsersService.addInformation(formData as User);
    this.router.navigateByUrl('/academic');
  }

  private convertToUTCMinus5(date: string): string {
    const utcDate = new Date(date);
    utcDate.setUTCHours(utcDate.getUTCHours() - 5);
    return utcDate.toISOString();
  }
}
