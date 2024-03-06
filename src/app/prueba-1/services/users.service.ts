import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  private baseURL= 'http://localhost:3000';

  constructor() { }

  searchUser(idUser: number){
    return this.http.get<User>(`${this.baseURL}/users/${idUser}`);
  }

}
