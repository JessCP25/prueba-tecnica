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

  updateUser(idUser: number, user:Partial<User>){
    const body = user;
    return this.http.patch<User>(`${this.baseURL}/users/${idUser}`, body );
  }

}
