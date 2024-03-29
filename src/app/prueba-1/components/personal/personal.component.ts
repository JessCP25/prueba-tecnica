import { CommonModule } from '@angular/common';
import { Component, OnInit, effect, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { EditUsersService } from '../../services/edit-users.service';
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
  isUser = false;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private editUsersService: EditUsersService
  ) {
    this.personalInformationForm.disable();
  }

  personalInformationForm = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    age: ['', [Validators.required]],
    city: ['', [Validators.required]],
  });


  searchUser(idUser: number) {
    if (idUser) {
      this.userService.searchUser(idUser).subscribe((res) => {
        if (res) {
          this.personalInformationForm.reset({
            name: res.name,
            lastName: res.lastName,
            age: res.age.toString(),
            city: res.city,
          });
          this.editUsersService.newUser(res);
          this.isUser = true;
        }
      });
    }
  }

  next() {
    if (!this.isUser) {
      this.personalInformationForm.markAllAsTouched();
      return;
    }

    this.router.navigateByUrl('/family');
  }
}
