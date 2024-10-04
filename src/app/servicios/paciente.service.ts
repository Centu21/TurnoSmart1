import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://tu-api-url.com/api/pacientes'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) {}

  registrarPaciente(pacienteData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pacienteData);
  }
}
