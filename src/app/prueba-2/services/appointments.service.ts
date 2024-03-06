import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentsResponse } from '../interfaces/interfaces-response/appointment.response.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private http = inject(HttpClient);

  constructor() { }

  getAppointmentsByProjectRegister(projectId: number, fromDate: string, toDate: string): Observable<AppointmentsResponse[]> {

    return this.http.get<AppointmentsResponse[]>(`URL_DE_TU_API/aqui_va_el_endpoint`);
  }

}
