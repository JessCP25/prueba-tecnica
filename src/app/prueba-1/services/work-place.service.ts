import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { WorkPlace } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkPlaceService {

  private http = inject(HttpClient);
  private baseURL= 'http://localhost:3000';

  constructor() { }

  getWorkPlaces(){
    return this.http.get<WorkPlace[]>(`${this.baseURL}/workPlaces`);
  }
}
