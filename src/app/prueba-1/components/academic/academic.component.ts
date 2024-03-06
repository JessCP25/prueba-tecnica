import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { Degree, User, WorkPlace } from '../../interfaces/user.interface';
import { WorkPlaceService } from '../../services/work-place.service';
import { Router } from '@angular/router';
import { EditUsersService } from '../../services/edit-users.service';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [
    CommonModule,
    InputNumberModule,
    AutoCompleteModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css',
})
export class AcademicComponent implements OnInit {
  degrees: string[] = ['Bachiller', 'Master', 'Doctor'];
  filteredDegrees: string[] = [];

  workPlaces: string[] = [];
  filteredWorkPlaces: string[] = [];

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private workPlaceServices: WorkPlaceService,
    private router: Router,
    private editUsersService: EditUsersService
  ) {}

  academicInformationForm = this.fb.group({
    degree: ['', [Validators.required]],
    workplace: ['', [Validators.required]],
    salary: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
    career: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    experienceYears: ['', [Validators.required]],
  });

  ngOnInit() {
    this.workPlaceServices.getWorkPlaces().subscribe((res) => {
      if (res) {
        this.workPlaces = res.map((place) => place.workPlace);
      }
    });
  }

  filterDegree(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    this.filteredDegrees = this.degrees.filter((degree) =>
      degree.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterWorkPlaces(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    this.filteredWorkPlaces = this.workPlaces.filter((workPlace) =>
      workPlace.toLowerCase().includes(query.toLowerCase())
    );
  }

  isInvalidField(field: string) {
    return this.validatorsService.isInvalidField(
      this.academicInformationForm,
      field
    );
  }

  submitInformation() {
    if (this.academicInformationForm.invalid) {
      this.academicInformationForm.markAllAsTouched();
      return;
    }
    this.editUsersService.addInformation(
      this.academicInformationForm.value as User
    );
    console.log(this.editUsersService.infoUser());
  }
}
