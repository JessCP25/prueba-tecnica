import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { EditUsersService } from '../../services/edit-users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit {
  editUsersService = inject(EditUsersService);
  informationComplete !:User | undefined;

  ngOnInit(): void {
    this.informationComplete = this.editUsersService.infoUser();
  }
}
