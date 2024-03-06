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
import { Degree, WorkPlace } from '../../interfaces/user.interface';
import { WorkPlaceService } from '../../services/work-place.service';

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
  degrees: Degree[] = [
    { id: 1, name: 'Bachiller' },
    { id: 2, name: 'Master' },
    { id: 3, name: 'Doctor' },
  ];
  filteredDegrees: Degree[] = [];

  workPlaces: WorkPlace[] = [];
  filteredWorkPlaces: WorkPlace[] = [];

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private workPlaceServices: WorkPlaceService
  ) {}

  academicInformationForm = this.fb.group({
    degree: ['', [Validators.required]],
    workplace: ['', [Validators.required]],
    salary: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
    career: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    experienceYears: ['', [Validators.required]]
  });

  ngOnInit() {
    this.workPlaceServices.getWorkPlaces().subscribe((res) => {
      if (res) {
        this.workPlaces = res;
      }
    });
  }

  filterDegree(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    this.filteredDegrees = this.degrees.filter(
      (country) => country.name.toLowerCase().indexOf(query.toLowerCase()) === 0
    );
  }

  filterWorkPlaces(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    this.filteredWorkPlaces = this.workPlaces.filter(
      (country) =>
        country.workPlace.toLowerCase().indexOf(query.toLowerCase()) === 0
    );
  }

  isInvalidField(field: string) {
    return this.validatorsService.isInvalidField(
      this.academicInformationForm,
      field
    );
  }
}
